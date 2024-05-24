import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

import { ProfilePageContainer } from './profile-page.container';

describe('ProfilePage', () => {
  const spy = jest.spyOn(global, 'fetch');
  const mockData = {
    '@id': '123',
    avatar: 'htps://avatar.com/avatar.png',
    player_id: '123',
    url: 'https://chess.com/player/123',
    username: 'chessmaster123',
    name: 'Chess Master 123',
    title: 'CM',
    followers: 15,
    country: 'US',
    last_online: 1716396114,
    joined: 1714573164,
    location: 'US',
    status: 'active',
    is_streamer: false,
    verified: false,
    league: 'bronze',
  };
  const resolveRequestMock = (data = mockData) => {
    spy.mockResolvedValueOnce({
      json: () => Promise.resolve(data),
    } as Response);
  };
  const rejectRequestMock = () => {
    spy.mockResolvedValueOnce({
      json: () => Promise.reject(),
    } as Response);
  };

  function ProfilePageWithRouteParams() {
    return (
      <MemoryRouter initialEntries={['/profile/123']}>
        <Routes>
          <Route path="/profile/:id" element={<ProfilePageContainer />} />
        </Routes>
      </MemoryRouter>
    );
  }

  it('should render the skeleton loader when rendered', async () => {
    render(<ProfilePageWithRouteParams />);

    expect(await screen.findByTestId('skeleton-loader')).toBeInTheDocument();
  });

  it('should render the chess master profile after successfully loading the request', async () => {
    resolveRequestMock();

    render(<ProfilePageWithRouteParams />);

    await waitFor(() =>
      expect(spy).toHaveBeenCalledWith('https://api.chess.com/pub/player/123'),
    );
    expect(screen.getByText('Chess Master 123')).toBeInTheDocument();
    expect(screen.getByAltText('Chess Master 123')).toBeInTheDocument();
    expect(screen.getByText('Player ID:')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('Username:')).toBeInTheDocument();
    expect(screen.getByText('chessmaster123')).toBeInTheDocument();
    expect(screen.getByText('Followers:')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('Joined:')).toBeInTheDocument();
    expect(screen.getByText('5/1/2024')).toBeInTheDocument();
    expect(screen.getByText('League:')).toBeInTheDocument();
    expect(screen.queryByTitle('Verified')).not.toBeInTheDocument();
  });

  it('should render the chess master profile with verified icon', async () => {
    resolveRequestMock({ ...mockData, verified: true });

    render(<ProfilePageWithRouteParams />);

    expect(await screen.findByText('Chess Master 123')).toBeInTheDocument();
    expect(screen.getByTitle('Verified')).toBeInTheDocument();
  });

  it('should render the chess master initial letter as avatar', async () => {
    resolveRequestMock({ ...mockData, avatar: '' });

    render(<ProfilePageWithRouteParams />);

    expect(await screen.findByText('C')).toBeInTheDocument();
  });

  it('should not render missing information form the profile', async () => {
    resolveRequestMock({
      ...mockData,
      league: '',
      username: '',
    });

    render(<ProfilePageWithRouteParams />);

    expect(await screen.findByText('Chess Master 123')).toBeInTheDocument();
    expect(screen.queryByTitle('Username:')).not.toBeInTheDocument();
    expect(screen.queryByTitle('League:')).not.toBeInTheDocument();
  });

  it('should render text instead of clocks when hours time is above 24h', async () => {
    resolveRequestMock({
      ...mockData,
      last_online: 1716113826,
    });

    render(<ProfilePageWithRouteParams />);

    expect(await screen.findByText('Chess Master 123')).toBeInTheDocument();
    expect(screen.getByText('more than a day ago')).toBeInTheDocument();
  });

  it('should render the past hours since chess master was online', async () => {
    const lastOnlineDate = new Date(1716113826 * 1000);
    const mockDate = new Date(1716123826 * 1000);
    jest
      .spyOn(global, 'Date')
      .mockImplementationOnce(() => lastOnlineDate as any)
      .mockImplementation(() => mockDate as any);

    resolveRequestMock({
      ...mockData,
      last_online: 1716113826,
    });

    render(<ProfilePageWithRouteParams />);

    expect(await screen.findByText('Chess Master 123')).toBeInTheDocument();
    expect(screen.getByText('02:46:40')).toBeInTheDocument();
  });

  it('should render the error view if something goes wrong in the request', async () => {
    rejectRequestMock();

    render(<ProfilePageWithRouteParams />);

    expect(await screen.findByText('Something went wrong')).toBeInTheDocument();
  });

  it('should navigate back to home', async () => {
    resolveRequestMock();

    window.history.pushState({}, '', '/profile/123');

    render(
      <BrowserRouter>
        <ProfilePageContainer />
      </BrowserRouter>,
    );

    expect(window.location.pathname).toEqual('/profile/123');

    userEvent.click(await screen.findByText(/back to home$/));

    expect(window.location.pathname).toEqual('/');
  });
});

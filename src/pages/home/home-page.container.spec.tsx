import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import { HomePageContainer } from './home-page.container';

describe('HomePage', () => {
  const spy = jest.spyOn(global, 'fetch');
  const mockData = {
    players: ['player1', 'player2'],
  };
  const resolveRequestMock = (data = mockData.players) => {
    spy.mockResolvedValueOnce({
      json: () => Promise.resolve({ players: data }),
    } as Response);
  };
  const rejectRequestMock = () => {
    spy.mockResolvedValueOnce({
      json: () => Promise.reject(),
    } as Response);
  };

  it('should render the skeleton loader when rendered', async () => {
    render(
      <MemoryRouter>
        <HomePageContainer />
      </MemoryRouter>,
    );

    expect(await screen.findByTestId('skeleton-loader')).toBeInTheDocument();
  });

  it('should render list of chess masters after successfully loading the chess master request', async () => {
    resolveRequestMock();

    render(
      <MemoryRouter>
        <HomePageContainer />
      </MemoryRouter>,
    );

    expect(spy).toHaveBeenCalledWith('https://api.chess.com/pub/titled/GM');
    expect(await screen.findByText('player1')).toBeInTheDocument();
    expect(screen.getByText('player2')).toBeInTheDocument();
  });

  it('should render empty view if chess master response is empty', async () => {
    resolveRequestMock([]);

    render(
      <MemoryRouter>
        <HomePageContainer />
      </MemoryRouter>,
    );

    expect(await screen.findByText('No results')).toBeInTheDocument();
  });

  it('should render error view if something goes wrong in the chess master request', async () => {
    rejectRequestMock();

    render(
      <MemoryRouter>
        <HomePageContainer />
      </MemoryRouter>,
    );

    expect(await screen.findByText('Something went wrong')).toBeInTheDocument();
  });

  it('should render the search bar input', async () => {
    resolveRequestMock();

    render(
      <MemoryRouter>
        <HomePageContainer />
      </MemoryRouter>,
    );

    await waitFor(() =>
      expect(
        screen.getByPlaceholderText('Search chess masters...'),
      ).toBeInTheDocument(),
    );
  });

  it('should render filtered chess masters', async () => {
    resolveRequestMock();

    render(
      <MemoryRouter>
        <HomePageContainer />
      </MemoryRouter>,
    );

    userEvent.type(
      screen.getByPlaceholderText('Search chess masters...'),
      'player1',
    );

    expect(await screen.findByText('player1')).toBeInTheDocument();
    expect(screen.queryByText('player2')).not.toBeInTheDocument();
  });

  it('redirects to chess master profile page', async () => {
    resolveRequestMock();

    render(
      <BrowserRouter>
        <HomePageContainer />
      </BrowserRouter>,
    );

    expect(window.location.pathname).toEqual('/');

    userEvent.click(await screen.findByText('player1'));

    expect(window.location.pathname).toEqual('/profile/player1');
  });
});

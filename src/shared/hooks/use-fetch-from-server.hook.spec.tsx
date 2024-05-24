import { render, screen } from '@testing-library/react';

import { useFetchFromServer } from './use-fetch-from-server.hook';

describe('useFetchFromServer hook', () => {
  function TestComponent({ fetchFunction }: any) {
    const { loading, error, data } = useFetchFromServer(fetchFunction);

    if (loading) {
      return <div>loading</div>;
    }

    if (data) {
      return <div>loaded</div>;
    }

    if (error) {
      return <div>error</div>;
    }

    return null;
  }

  it('should handle loading state while fetching data', async () => {
    const mockFetch = jest.fn().mockReturnValue(
      new Promise((resolve) => {
        setTimeout(resolve, 3000);
      }),
    );

    render(<TestComponent fetchFunction={mockFetch} />);

    expect(await screen.findByText('loading')).toBeInTheDocument();
  });

  it('should handle loaded state data is successfully fetched', async () => {
    const mockFetch = jest.fn().mockResolvedValue({ data: 'Mocked data' });

    render(<TestComponent fetchFunction={mockFetch} />);

    expect(await screen.findByText('loaded')).toBeInTheDocument();
  });

  it('should handle error state when there is an error in the request', async () => {
    const mockFetch = jest.fn().mockRejectedValue(new Error('Mocked error'));

    render(<TestComponent fetchFunction={mockFetch} />);

    expect(await screen.findByText('error')).toBeInTheDocument();
  });
});

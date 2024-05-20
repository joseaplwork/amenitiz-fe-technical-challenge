import { render, screen } from '@testing-library/react';

import { HomePageContainer } from './home-page.container';

describe('HomePage', () => {
  it('renders', () => {
    render(<HomePageContainer />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});

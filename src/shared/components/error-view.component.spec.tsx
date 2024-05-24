import { render, screen } from '@testing-library/react';

import { ErrorView } from './error-view.component';

describe('ErrorView component', () => {
  it('should render the error view', () => {
    render(<ErrorView />);

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByAltText('error view')).toBeInTheDocument();
  });
});

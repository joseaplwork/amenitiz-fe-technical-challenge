import { render, screen } from '@testing-library/react';
import React from 'react';

import { HomePage } from './home-page.component';

describe('HomePage', () => {
  it('renders', () => {
    render(<HomePage />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});

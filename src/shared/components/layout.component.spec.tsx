import { render, screen } from '@testing-library/react';

import { Layout } from './layout.component';

describe('Layout component', () => {
  it('renders children correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders multiple children correctly', () => {
    render(
      <Layout>
        <div>Child 1</div>
        <div>Child 2</div>
      </Layout>,
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders header component', () => {
    render(<Layout>Test Content</Layout>);

    expect(screen.getByText('Chess master wiki')).toBeInTheDocument();
  });
});

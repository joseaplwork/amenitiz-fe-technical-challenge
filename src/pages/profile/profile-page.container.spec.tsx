import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ProfilePageContainer } from './profile-page.container';

describe('ProfilePage', () => {
  it('should pass', async () => {
    render(
      <MemoryRouter initialEntries={['/profile/123']}>
        <ProfilePageContainer />
      </MemoryRouter>,
    );
    expect(true).toBeTruthy();
  });
});

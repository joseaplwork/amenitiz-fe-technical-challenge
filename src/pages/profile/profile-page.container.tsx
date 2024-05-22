import { useParams } from 'react-router-dom';

import { Layout } from '@app/shared/components';

import { useFetchChessMaster } from './hooks/use-fetch-chess-master.hook';
import { ProfilePage } from './profile-page.component';

export function ProfilePageContainer() {
  const { id } = useParams();
  const { loading, error, chessMaster } = useFetchChessMaster(id);

  return (
    <Layout>
      <ProfilePage loading={loading} error={error} chessMaster={chessMaster} />
    </Layout>
  );
}

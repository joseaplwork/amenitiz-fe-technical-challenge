import { Layout } from '@app/shared/components';

import { HomePage } from './home-page.component';
import { useFetchAllChessMasters } from './hooks/use-fetch-chess-master.hook';

export function HomePageContainer() {
  const { error, loading, chessMasters } = useFetchAllChessMasters();

  return (
    <Layout>
      <HomePage chessMasters={chessMasters} loading={loading} error={error} />
    </Layout>
  );
}

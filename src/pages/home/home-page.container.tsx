import { useSearchParams } from 'react-router-dom';

import { Layout } from '@app/shared/components';

import { SearchBar } from './components/search-bar.component';
import { HomePage } from './home-page.component';
import { useFetchAllChessMasters } from './hooks/use-fetch-all-chess-masters.hook';
import { filterChessMasters } from './services/filter-chess-masters.service';

export function HomePageContainer() {
  const { error, loading, chessMasters } = useFetchAllChessMasters();
  const [search] = useSearchParams();

  return (
    <Layout>
      <SearchBar />
      <HomePage
        chessMasters={filterChessMasters(chessMasters, search.get('s'))}
        loading={loading}
        error={error}
      />
    </Layout>
  );
}

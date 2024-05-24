import { useFetchFromServer } from '@app/shared/hooks';
import { fetchAllChessMasters } from '@app/shared/services';

export function useFetchAllChessMasters() {
  const { loading, error, data } = useFetchFromServer(fetchAllChessMasters);

  return {
    loading,
    error,
    chessMasters: data,
  };
}

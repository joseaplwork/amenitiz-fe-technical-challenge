import { useRequestFromServer } from '@app/shared/hooks';
import { fetchAllChessMasters } from '@app/shared/services';

export function useFetchAllChessMasters() {
  const { loading, error, data } = useRequestFromServer(fetchAllChessMasters);

  return {
    loading,
    error,
    chessMasters: data,
  };
}

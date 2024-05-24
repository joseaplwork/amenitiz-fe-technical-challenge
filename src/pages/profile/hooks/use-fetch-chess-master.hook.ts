import { useFetchFromServer } from '@app/shared/hooks';
import { fetchChessMaster } from '@app/shared/services';

export function useFetchChessMaster(id?: string) {
  if (!id) {
    return {
      loading: false,
      error: true,
      chessMaster: null,
    };
  }

  const { loading, error, data } = useFetchFromServer(
    fetchChessMaster.bind(null, id),
  );

  return {
    loading,
    error,
    chessMaster: data,
  };
}

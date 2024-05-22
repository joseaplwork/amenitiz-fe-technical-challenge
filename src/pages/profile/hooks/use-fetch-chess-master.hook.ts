import { useRequestFromServer } from '@app/shared/hooks';
import { fetchChessMaster } from '@app/shared/services';

export function useFetchChessMaster(id?: string) {
  if (!id) {
    return {
      loading: false,
      error: true,
      chessMaster: null,
    };
  }

  const { loading, error, data } = useRequestFromServer(
    fetchChessMaster.bind(null, id),
  );

  return {
    loading,
    error,
    chessMaster: data,
  };
}

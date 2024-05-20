import { useEffect, useState } from 'react';

import { fetchAllChessMasters } from '../services/chess-master.service';

export function useFetchAllChessMasters() {
  const [chessMasters, setChessMasters] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchAllChessMasters()
      .then((data) => setChessMasters(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    error,
    chessMasters,
  };
}

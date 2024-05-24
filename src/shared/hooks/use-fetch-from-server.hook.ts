import { useEffect, useState } from 'react';

export function useFetchFromServer<T>(
  caller: (id?: string) => Promise<T>,
  initialValue = null,
) {
  const [data, setData] = useState<T | null>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    caller()
      .then((d) => setData(d))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    error,
    data,
  };
}

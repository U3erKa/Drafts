import { useEffect, useState } from 'react';
import { getFromJsonPlaceholder, JSONPLACEHOLDER_RESOURCES } from 'api/fetch';

export function useLoader<T>(resource: JSONPLACEHOLDER_RESOURCES) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getFromJsonPlaceholder(resource);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, error, isLoading };
}

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
        const data: any = await getFromJsonPlaceholder(resource);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [resource]);
  return { data, error, isLoading };
}

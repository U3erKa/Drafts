import { useEffect, useState } from 'react';

export function useLoader<T>(resource: string, options?: RequestInit) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(resource, options);
        const data = await res.json();
        if (!res.ok) throw data;
        setData(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource]);
  return { data, error, isLoading };
}

import { useEffect, useState } from 'react';
import { getFromJsonPlaceholder, JSONPLACEHOLDER_RESOURCES } from 'api/fetch';

export function useLoader<T>(resource: JSONPLACEHOLDER_RESOURCES) {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getFromJsonPlaceholder(resource);
      setData(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data;
}

import { getFromJsonPlaceholder, JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { useEffect, useState } from 'react';

export function useLoader(resource: JSONPLACEHOLDER_RESOURCES) {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const load = async () => {
    const data = await getFromJsonPlaceholder(resource);
    setData(data);
  };
  return data;
}

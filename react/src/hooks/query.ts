import { useQuery } from '@tanstack/react-query';
import type { JSONPLACEHOLDER_RESOURCES } from 'const';

export function useJSONPlaceholderData<T>(resource: JSONPLACEHOLDER_RESOURCES) {
  return useQuery({
    queryKey: ['jsonplaceholder', resource],
    async queryFn({ signal }) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`, {
        method: 'GET',
        signal,
      });
      const data: T = await response.json();
      return data;
    },
  });
}

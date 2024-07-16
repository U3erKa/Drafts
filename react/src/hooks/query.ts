import { useQuery } from '@tanstack/react-query';
import type { JSONPLACEHOLDER_RESOURCES } from 'const';
import type { JSONPlaceholderData } from 'types/jsonPlaceholder';

export function useJSONPlaceholderData<T extends JSONPLACEHOLDER_RESOURCES>(resource: T) {
  return useQuery({
    queryKey: ['jsonplaceholder', resource],
    async queryFn({ signal }) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`, {
        method: 'GET',
        signal,
      });
      const data: JSONPlaceholderData[T] = await response.json();
      return data;
    },
  });
}

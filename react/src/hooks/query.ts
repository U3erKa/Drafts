import { useQuery } from '@tanstack/react-query';
import type { JSONPLACEHOLDER_RESOURCES } from 'const';
import type { User } from 'types/api/getFromOwnDB';

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

export function useRegisteredUser(user?: User) {
  const pathname = 'api/users/auth/signup';

  return useQuery({
    queryKey: [pathname, user],
    async queryFn({ signal }) {
      if (!user) return null;
      const response = await fetch(`http://localhost:5000/${pathname}`, {
        method: 'POST',
        body: JSON.stringify(user),
        signal,
      });
      const data: User = await response.json();
      return data;
    },
  });
}

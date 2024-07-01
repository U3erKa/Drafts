import { useQuery } from '@tanstack/react-query';
import { User } from 'types/api/getFromOwnDB';

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

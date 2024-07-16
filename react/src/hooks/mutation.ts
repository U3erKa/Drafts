import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

export const initialValues = {
  nickName: '',
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  userRole: '',
};

export type UserUserMutationOptions = Omit<
  UseMutationOptions<typeof initialValues, Error, typeof initialValues>,
  'mutationFn'
>;

export function useUserMutation(options?: UserUserMutationOptions) {
  return useMutation({
    ...options,
    async mutationFn(user) {
      const response = await fetch(`http://localhost:5000/api/users/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(user),
      });
      const data: typeof initialValues = await response.json();
      return data;
    },
  });
}

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { UsersEntries } from 'types/api';
import { getUsers } from 'app/slices/users';

export default function UserList() {
  const { users, isLoading, error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers() as any);
  }, []);

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error!!!</div>}
      {users.length > 0 && users.map((user: UsersEntries) => <article key={user.id}>{JSON.stringify(user)}</article>)}
    </section>
  );
}

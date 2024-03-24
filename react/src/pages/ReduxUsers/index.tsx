import { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { getUsers } from 'slices/users';
import { UserEntry } from 'types/api/getFromJsonPlaceholder';
import { UserSliceState } from 'types/slices';

const Users: FC = function () {
  const { users, isLoading, error } = useSelector<RootState, UserSliceState>(
    (state) => state.users,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers() as unknown as AnyAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Our clients</h1>
      <section>
        {isLoading && <div>Loading...</div>}
        {error}
        {users.length > 0 &&
          users.map((user: UserEntry) => (
            <article key={user.id}>{JSON.stringify(user)}</article>
          ))}
      </section>
    </>
  );
};

export default Users;

import { UserList } from 'components';
import { FC } from 'react';

const Users: FC = function () {
  return (
    <>
      <h1>Our clients</h1>
      <UserList />
    </>
  );
};

export default Users;

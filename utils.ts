import { User } from './types';

function createUserQueryValues(user: User) {
  const {
    name: { first, last },
    email,
    login : {
      sha256 : password
    },
    phone
  } = user;
  return `(
    '${first} ${last}',
    '${email}',
    '${password}',
    '${phone}'
  )`;
}

export const mapUsers = (users: User[]) => {
  const usersElems = users.map(createUserQueryValues);
  return usersElems.join(',');
};

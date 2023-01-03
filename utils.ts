import _ from 'lodash';
import type { User } from './types';

function createUserQueryValues(user: User) {
  const {
    name: { first, last },
    email,
    login: { sha256: password },
    phone,
    dob: { date: birthday },
    gender,
  } = user;
  return `(
    '${first}',
    '${last}',
    '${email}',
    '${password}',
    '${phone}',
    '${birthday}',
    '${gender === 'male'}',
    '${_.random(1, 2, true)}',
    '${_.random(40, 150, false)}'
  )`;
}

export const mapUsers = (users: User[]) => {
  const usersElems = users.map(createUserQueryValues);
  return usersElems.join(',');
};

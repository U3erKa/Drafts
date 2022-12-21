import { User } from './utils/validationSchema.js';

export interface userInDB extends User {
  id: number;
};

export const DB: userInDB[] = [
  // {
  //   login: 'user',
  //   password: 'U3erovich',
  // },
  // {
  //   login: 'user1',
  //   password: 'U3erovich2',
  // },
];

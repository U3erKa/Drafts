import { User as UserSchema } from '../utils/validationSchema.js';

export interface UserInDB extends UserSchema {
  id: number;
}

export default class User {
  static DB: UserInDB[] = [
    {
      id: 1,
      login: 'user',
      password: 'U3erovich',
    },
    {
      id: 2,
      login: 'user1',
      password: 'U3erovich2',
    },
  ];

  static async create(userData: UserInDB) {
    const newUser = { ...userData, id: Date.now() };
    this.DB.push(newUser);
    return newUser;
  }

  static async getAll() {
    return this.DB;
  }

  static async findOne(userId: string | number) {
    return this.DB.find(({ id }) => id === +userId);
  }

  static async updateOne(userId: string | number, body: UserInDB) {
    const foundUser = await User.findOne(userId);
    if (foundUser) {
      // let updatedUser!: UserInDB;

      // this.DB = this.DB.map((user) => {
      //   if (user.id === +userId) {
      //     updatedUser = { ...user, ...body };
      //     return updatedUser;
      //   } else {
      //     return user;
      //   }
      // });

      // foundUser = {...foundUser, ...body};
      Object.assign(foundUser, body);
      return foundUser;
    } else {
      throw new Error('User not found');
    }
  }

  static async deleteOne(userId: string | number) {
    const foundUser = await User.findOne(userId);

    if (foundUser) {
      this.DB = this.DB.filter(({ id }) => id !== +userId);
      return foundUser;
    }
    throw new Error('User not found');
  }
}

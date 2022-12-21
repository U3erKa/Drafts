import { Request, Response } from 'express';
import { userInDB } from '../DB';
// import { DB } from '../DB.js';

let DB: userInDB[] = [
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

export const addUserToDB = async (req: Request, res: Response) => {
  const userObj = { ...req.body, id: Date.now() };

  DB.push(userObj);
  res.send(userObj);
};

export const getUsers = async (req: Request, res: Response) => {
  res.status(200).send(DB);
};

export const getUser = async (req: Request, res: Response) => {
  const {
    params: { userId },
    // query: {},
  } = req;

  const foundUser = DB.find(({ id }) => id === +userId);
  if (!foundUser) {
    res.status(404).send('User not found');
  } else {
    res.status(200).send(foundUser);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const {
    body,
    params: { userId },
  } = req;

  const foundUser = DB.find(({ id }) => id === +userId);
  if (!foundUser) {
    res.status(404).send('User not found');
  } else {
    let updatedUser;

    DB = DB.map((user) => {
      if (user.id === +userId) {
        updatedUser = { ...user, ...body };
        return updatedUser;
      } else {
        return user;
      }
    });
    res.status(200).send(updatedUser);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const {
    params: { userId },
  } = req;

  const foundUser = DB.find(({ id }) => id === +userId);
  if (foundUser) {
    DB = DB.filter(({ id }) => id !== +userId);
    res.status(200).send(userId);
  } else {
    res.status(404).send('User not found');
  }
};

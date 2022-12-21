import { Request, Response } from 'express';
import { DB } from '../DB.js';

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

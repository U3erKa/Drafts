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
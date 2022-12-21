import { Request, Response } from 'express';
import User from '../model/User.js';

export const addUserToDB = async (req: Request, res: Response) => {
  const userObj = await User.create(req.body);
  res.send(userObj);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.getAll();
  res.status(200).send(users);
};

export const getUser = async (req: Request, res: Response) => {
  const {
    params: { userId },
    // query: {},
  } = req;

  const foundUser = await User.findOne(userId);
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

  try {
    const updatedUser = await User.updateOne(userId, body);
    res.status(200).send(updatedUser);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const {
    params: { userId },
  } = req;

  try {
    const deletedUser = await User.deleteOne(userId);
    res.status(200).send(deletedUser);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
};

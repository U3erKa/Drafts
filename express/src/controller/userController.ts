import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import NotFoundError from '../error/NotFoundError.js';
import User from '../model/User.js';

export const addUserToDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userObj = await User.create(req.body);
  res.send(userObj);
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const users = await User.getAll();
  res.status(200).send(users);
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    params: { userId },
    // query: {},
  } = req;

  const foundUser = await User.findOne(userId);
  if (!foundUser) {
    next(createError(404, 'User not found'));
    // next(createError(404, 'User not found', {test: true}));
  } else {
    res.status(200).send(foundUser);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    body,
    params: { userId },
  } = req;

  try {
    const updatedUser = await User.updateOne(userId, body);
    res.status(200).send(updatedUser);
  } catch (error: any) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    params: { userId },
  } = req;

  try {
    const deletedUser = await User.deleteOne(userId);
    res.status(200).send(deletedUser);
  } catch (error: any) {
    next(new NotFoundError(error.message));
  }
};

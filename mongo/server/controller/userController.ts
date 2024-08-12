import createHttpError from 'http-errors';
import User from '../db/models/users';

import type { RequestHandler } from 'express';

export const createUser: RequestHandler = async (req, res, next) => {
  const { body } = req;

  try {
    const user = await User.create(body);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

export const getUsers: RequestHandler = async (req, res, next) => {
  const {
    query: { limit = 0, offset = 0 },
  } = req;

  try {
    const users = await User.find().select(['-password', '-__v']).limit(+limit).skip(+offset);

    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  try {
    const user = await User.findById(userId).select(['-password', '-__v']);

    if (!user) {
      throw createHttpError(404, `User not found: ${userId}`);
    }

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, body, {
      new: true,
    }).select(['-password', '-__v']);

    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  try {
    const deletedUser = await User.findByIdAndDelete(userId).select(['-password', '-__v']);

    if (!deletedUser) {
      throw createHttpError(404, `User not found: ${userId}`);
    }

    res.status(200).send({ data: deletedUser });
  } catch (error) {
    next(error);
  }
};

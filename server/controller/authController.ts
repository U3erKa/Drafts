import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';

import User from '../db/models/users';
import * as AuthService from '../services/auth.service';

export const register: RequestHandler = async (req, res, next) => {
  const { body } = req;

  try {
    const user = await User.create(body);

    const sessionData = await AuthService.createSession(user);

    res.status(201).send({ data: sessionData });
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler = async (req, res, next) => {
  const {
    body: { email, password },
  } = req;

  try {
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      throw createHttpError(404, 'Invalid email / password');
    }
    if (!bcrypt.compareSync(password, foundUser.password)) {
      throw createHttpError(404, 'Invalid email / password');
    }

    const sessionData = await AuthService.createSession(foundUser);

    res.status(200).send({ data: sessionData });
  } catch (error) {
    next(error);
  }
};

export const refresh: RequestHandler = async (req, res, next) => {
  try {
    // @ts-ignore
    const { tokenData } = req;

    const session = await AuthService.refreshSession(tokenData);
    res.send({ data: session });
  } catch (error) {
    next(error);
  }
};

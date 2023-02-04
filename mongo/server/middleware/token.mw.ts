import createHttpError from 'http-errors';

import Token from '../db/models/tokens';
import * as JWTService from '../services/jwt.service';

import type { RequestHandler } from 'express';

export const checkRefreshToken: RequestHandler = async (req, res, next) => {
  const {
    body: { token },
  } = req;

  try {
    // verifyRefreshToken(token) should have been there
    await JWTService.verifyAccessToken(token);

    const refreshTokenInstance = await Token.findOne({ token });

    if (!refreshTokenInstance) {
      throw createHttpError(404, 'Token not found');
    }

    // @ts-ignore
    req.tokenData = refreshTokenInstance;
    next();
  } catch (error) {
    next(error);
  }
};

export const checkAccessToken: RequestHandler = async (req, res, next) => {
  const {
    headers: { authorization },
  } = req;

  try {
    if (!authorization) {
      throw createHttpError(401, 'No token found');
    }

    const [authType, token] = authorization.split(' ');
    // @ts-ignore
    req.tokenData = await JWTService.verifyAccessToken(token);
    next();
  } catch (error) {
    next(error);
  }
};

import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_TIME } from '../constants';

const jwtSign = promisify(jwt.sign);
const jwtVerify = promisify(jwt.verify);

const tokenConfig = {
  access: {
    secret: ACCESS_TOKEN_SECRET,
    expiresIn: ACCESS_TOKEN_TIME,
  },
};

const createToken = async (payload, options) =>
  // @ts-expect-error
  jwtSign(payload, options.secret, { expiresIn: options.expiresIn });

// @ts-expect-error
const verifyToken = async (token, options) => jwtVerify(token, options.secret);

export const createAccessToken = (payload) => createToken(payload, tokenConfig.access);

export const verifyAccessToken = (token) => verifyToken(token, tokenConfig.access);

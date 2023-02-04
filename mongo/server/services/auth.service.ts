import User from '../db/models/users';
import Token from '../db/models/tokens';
import * as JWTServise from './jwt.service';
import createHttpError from 'http-errors';

export const createSession = async (user) => {
  const tokenPayload = {
    firstName: user.firstName,
    lastName: user.lastName,
    id: user._id,
  };

  const accessToken = await JWTServise.createAccessToken(tokenPayload);

  await Token.create({ userId: user._id, token: accessToken });

  return { user, tokens: { access: accessToken } };
};

export const refreshSession = async (tokenInstance) => {
  const foundUser = await User.findById(tokenInstance.userId);

  if (!foundUser) {
    throw createHttpError(404, `User not found: ${tokenInstance.userId}`);
  }

  const tokenPayload = {
    firstName: foundUser.firstName,
    lastName: foundUser.lastName,
    id: foundUser._id,
  };

  const accessToken = await JWTServise.createAccessToken(tokenPayload);
  await Token.findOneAndUpdate({ token: tokenInstance.token }, { token: accessToken });

  return { user: foundUser, tokens: { access: accessToken } };
};

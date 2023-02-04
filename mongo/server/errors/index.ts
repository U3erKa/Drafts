import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

import type { ErrorRequestHandler } from 'express';

export const basicErrorHandler: ErrorRequestHandler = async (
  err,
  req,
  res,
  next,
) => {
  res.status(err.status || 500).send({ error: err });
};

export const tokenErrorHandler: ErrorRequestHandler = async (
  err,
  req,
  res,
  next,
) => {
  if (err instanceof JsonWebTokenError) {
    return res.status(401).send({ error: { message: 'Invalid JWT' } });
  }

  if (err instanceof TokenExpiredError) {
    return res.status(419).send({ error: { message: 'Expired JWT' } });
  }

  next();
};

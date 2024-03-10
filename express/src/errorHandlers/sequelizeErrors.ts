import { UniqueConstraintError } from 'sequelize';

/** @type {import('express').ErrorRequestHandler} */
export const sequelizeErrorHandler = async (err, req, res, next) => {
  if (err instanceof UniqueConstraintError) {
    res.status(409).send({ errors: err.errors });
    return;
  }
  next(err);
};

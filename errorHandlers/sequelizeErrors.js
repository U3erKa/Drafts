const { nextTick } = require('process');
const { BaseError, UniqueConstraintError } = require('sequelize');

/** @type {import('express').ErrorRequestHandler} */
module.exports.sequelizeErrorHandler = async (err, req, res, next) => {
  if (err instanceof UniqueConstraintError) {
    return res.status(409).send({ errors: err.errors });
  }
  nextTick(error);
};

/** @type {import('express').ErrorRequestHandler} */
module.exports.handleError = async (err, req, res, next) => {
  res.status(err.status ?? 500).send({ errors: [err] });
};

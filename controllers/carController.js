const { Car } = require('../models');

/** @type {import('express').RequestHandler} */
module.exports.createCar = async (req, res, next) => {
  const { body } = req;

  const newCar = await Car.create(body);

  res.status(201).send({ data: newCar });
};

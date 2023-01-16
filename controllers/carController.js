const { Car } = require('../models');

/** @type {import('express').RequestHandler} */
module.exports.createCar = async (req, res, next) => {
  const { body } = req;

  const newCar = await Car.create(body);

  res.status(201).send({ data: newCar });
};

/** @type {import('express').RequestHandler} */
module.exports.getCars = async (req, res, next) => {
  const cars = await Car.findAll({
    // attributes: ['model', 'manufacturer', 'isUsed', 'price'],
    // attribures: {
    //   exclude: ['createdAt', 'updatedAt']
    // },
    // where: {
    //   isUsed: false,
    // },
  });

  res.send({ data: cars });
};


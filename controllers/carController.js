const createHttpError = require('http-errors');
const { Car, Review, Seller } = require('../models');

/** @type {import('express').RequestHandler} */
module.exports.createCar = async (req, res, next) => {
  try {
    const { body } = req;

    const newCar = await Car.create(body);

    res.status(201).send({ data: newCar });
  } catch (error) {
    next(error);
  }
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
    include: [
      { model: Review, required: true, as: 'reviews' },
      {
        model: Seller,
        as: 'sellers',
        attributes: ['id', 'name', 'address'],
        through: { attributes: [] },
      },
    ],
  });

  res.send({ data: cars });
};

/** @type {import('express').RequestHandler} */
module.exports.getCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  // const [car] = await Car.findAll({
  //   where: { id: carId },
  // });
  // const car = await Car.findOne({
  //   where: { id: carId },
  // });
  const car = await Car.findByPk(carId);

  if (car) {
    res.send({ data: car });
  } else {
    const error = createHttpError(404, 'No such car found');
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
module.exports.updateCar = async (req, res, next) => {
  try {
    const {
      body,
      params: { carId },
    } = req;

    const [updatedRows, [updatedCar]] = await Car.update(body, {
      where: { id: carId },
      returning: true,
    });

    // const car = await Car.findByPk(carId);
    // const updatedCar = await car.update(body, { returning: true });
    // if (!car) {
    //   throw createHttpError(404, 'No such car found');
    // }

    if (updatedRows === 0) {
      const error = createHttpError(404, 'No such car found');
      throw error;
    } else if (updatedRows === 1) {
      res.send({ data: updatedCar });
    }
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
module.exports.deleteCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const deletedRows = await Car.destroy({
      where: { id: carId },
      returning: true,
    });

    // const car = await Car.findByPk(carId);

    if (deletedRows === 0) {
      throw createHttpError(404, 'No such car found');
    }
    // await car.destroy();

    res.send({ data: carId });
    // res.send({ data: car });
  } catch (error) {
    next(error);
  }
};

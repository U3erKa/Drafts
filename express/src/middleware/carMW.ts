import createHttpError from 'http-errors';
import { Car } from '../model/index.js';

/** @type {import('express').RequestHandler} */
export const getCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  const car = await Car.findByPk(carId);

  if (!car) {
    return next(createHttpError(404, 'No such car found'));
  }
  req.car = car;
  next();
};

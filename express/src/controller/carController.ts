import createHttpError from 'http-errors';
import { Car, Review, Seller } from '../model/index.js';
import type { RequestHandler } from 'express';

export const createCar: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req;

    const newCar = await Car.create(body);

    res.status(201).send({ data: newCar });
  } catch (error) {
    next(error);
  }
};

export const getCars: RequestHandler = async (req, res, next) => {
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

export const getCar: RequestHandler = async (req, res, next) => {
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

export const updateCar: RequestHandler = async (req, res, next) => {
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

export const deleteCar: RequestHandler = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const deletedRows = await Car.destroy({
      where: { id: carId },
      // @ts-expect-error
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

export const addPicToCar: RequestHandler = async (req, res, next) => {
  const {
    file,
    params: { carId },
  } = req as typeof req & { file };

  try {
    const [updatedCars, [car]] = await Car.update(
      { picPath: file?.filename },
      { where: { id: carId }, returning: true },
    );

    if (updatedCars !== 1) {
      throw createHttpError(404, 'Car not found');
    }
    res.send({ data: car, file });
  } catch (error) {
    next(error);
  }
};

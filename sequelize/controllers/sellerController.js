const createHttpError = require('http-errors');
const { Seller } = require('../models');

/** @type {import('express').RequestHandler} */
module.exports.createSeller = async (req, res, next) => {
  const { body } = req;

  try {
    const seller = await Seller.create(body);
    res.status(201).send({ data: seller });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
module.exports.getSellers = async (req, res, next) => {
  try {
    const sellers = await Seller.findAll();
    res.status(201).send({ data: sellers });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
module.exports.getSeller = async (req, res, next) => {
  const {
    params: { sellerId },
  } = req;

  try {
    const seller = await Seller.findByPk(sellerId);

    if (!seller) {
      throw createHttpError(404, 'Seller not found');
    }

    const cars = await seller.getCars();

    res.status(201).send({ data: { ...seller.toJSON(), cars } });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
module.exports.updateSeller = async (req, res, next) => {
  const {
    body,
    params: { sellerId },
  } = req;

  try {
    const [rowsUpdated, [seller]] = await Seller.update(body, {
      where: { id: sellerId },
      returning: true,
    });

    if (rowsUpdated === 0) {
      throw createHttpError(404, 'Review not found');
    }
    res.status(200).send({ data: seller });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
module.exports.deleteSeller = async (req, res, next) => {
  const {
    params: { sellerId },
  } = req;

  try {
    const rowsDeleted = await Seller.destroy({ where: { id: sellerId } });

    if (rowsDeleted === 0) {
      throw createHttpError(404, 'Review not found');
    }
    res.status(200).send({ data: sellerId });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
module.exports.addCarToSeller = async (req, res, next) => {
  const {
    params: { sellerId },
    car,
  } = req;

  try {
    const seller = await Seller.findByPk(sellerId);

    if (!seller) {
      throw createHttpError(404, 'Seller not found');
    }

    await seller.addCar(car);

    res.send({ data: 'Car added' });
  } catch (error) {
    next(error);
  }
};

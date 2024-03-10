import createHttpError from 'http-errors';
import { Review } from '../model/index.js';
import car from '../model/car.js';

/** @type {import('express').RequestHandler} */
export const createReview = async (req, res, next) => {
  const { body, car } = req;
  try {
    const review = await car.createReview(body);
    res.status(201).send({ data: review });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
export const getReviews = async (req, res, next) => {
  const { car } = req;
  try {
    const reviews = await car.getReviews();
    res.status(200).send({ data: reviews });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
export const getReview = async (req, res, next) => {
  const {
    params: { reviewId },
  } = req;

  try {
    const review = await Review.findByPk(reviewId);
    // const review = await Review.findOne({where: {id: reviewId, carId: car.id}});

    if (!review) {
      throw createHttpError(404, 'Review not found');
    }
    res.status(200).send({ data: review });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
export const updateReview = async (req, res, next) => {
  const {
    body,
    params: { reviewId },
  } = req;

  try {
    const [rowsUpdated, [review]] = await Review.update(body, {
      where: { id: reviewId },
      returning: true,
    });

    if (rowsUpdated === 0) {
      throw createHttpError(404, 'Review not found');
    }
    res.status(200).send({ data: review });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
export const deleteReview = async (req, res, next) => {
  const {
    params: { reviewId },
  } = req;

  try {
    const rowsDeleted = await Review.destroy({ where: { id: reviewId } });

    if (rowsDeleted === 0) {
      throw createHttpError(404, 'Review not found');
    }
    res.status(200).send({ data: reviewId });
  } catch (error) {
    next(error);
  }
};

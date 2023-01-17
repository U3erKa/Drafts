const { Review } = require('../models');

/** @type {import('express').RequestHandler} */
module.exports.createReview = async (req, res, next) => {
  const { body, car } = req;
  try {
    const review = await car.createReview(body);
    res.status(201).send({ data: review });
  } catch (error) {
    next(error);
  }
};

/** @type {import('express').RequestHandler} */
module.exports.getReviews = async (req, res, next) => {
  const { car } = req;
  try {
    const reviews = await car.getReviews();
    res.status(200).send({ data: reviews });
  } catch (error) {
    next(error);
  }
};

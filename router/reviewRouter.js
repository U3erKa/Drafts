const reviewRouter = require('express').Router();
const { getReviews, createReview } = require('../controllers/reviewController');

reviewRouter.route('/').get(getReviews).post(createReview);

module.exports = reviewRouter;

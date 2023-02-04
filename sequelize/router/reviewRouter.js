const reviewRouter = require('express').Router();
const {
  getReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');

reviewRouter.route('/').get(getReviews).post(createReview);
reviewRouter
  .route('/:reviewId')
  .get(getReview)
  .put(updateReview)
  .delete(deleteReview);

module.exports = reviewRouter;

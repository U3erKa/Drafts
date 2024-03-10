import { Router } from 'express';
import {
  getReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} from '../controller/reviewController.js';

const reviewRouter = Router();

reviewRouter.route('/').get(getReviews).post(createReview);
reviewRouter
  .route('/:reviewId')
  .get(getReview)
  .put(updateReview)
  .delete(deleteReview);

export default reviewRouter;

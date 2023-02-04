const sellerRouter = require('express').Router();
const {
  getSellers,
  createSeller,
  getSeller,
  updateSeller,
  deleteSeller,
  addCarToSeller,
} = require('../controllers/sellerController');
const { getCar } = require('../middleware/carMW');

sellerRouter.route('/').get(getSellers).post(createSeller);
sellerRouter
  .route('/:sellerId')
  .get(getSeller)
  .put(updateSeller)
  .delete(deleteSeller);
sellerRouter.route('/:sellerId/cars/:carId').post(getCar, addCarToSeller);

module.exports = sellerRouter;

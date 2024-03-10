import { Router } from 'express';
import {
  getSellers,
  createSeller,
  getSeller,
  updateSeller,
  deleteSeller,
  addCarToSeller,
} from '../controller/sellerController.js';
import { getCar } from '../middleware/carMW.js';
import { bodyParser } from '../middleware/userMW.js';
const sellerRouter = Router();
sellerRouter.use(bodyParser);

sellerRouter.route('/').get(getSellers).post(createSeller);
// sellerRouter
//   .route('/:sellerId')
//   .get(getSeller)
//   .put(updateSeller)
//   .delete(deleteSeller);
// sellerRouter.route('/:sellerId/cars/:carId').post(getCar, addCarToSeller);

export default sellerRouter;

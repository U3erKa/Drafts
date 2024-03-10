import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import reviewRouter from './reviewRouter.js';
import { getCar as getCarMW } from '../middleware/carMW.js';
import {
  createCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
  addPicToCar,
} from '../controller/carController.js';

const carsRouter = Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../public/images'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

carsRouter.route('/').get(getCars).post(createCar);
carsRouter
  .route('/:carId')
  .get(getCar)
  .post(upload.single('pic'), addPicToCar)
  .put(updateCar)
  .delete(deleteCar);

carsRouter.use('/:carId/reviews', getCarMW, reviewRouter);

export default carsRouter;

const carsRouter = require('express').Router();
const multer = require('multer');
const path = require('path');
const reviewRouter = require('./reviewRouter');
const { getCar: getCarMW } = require('../middleware/carMW');
const { createCar, getCars, getCar, updateCar, deleteCar, addPicToCar } = require('../controllers/carController');

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
carsRouter.route('/:carId').get(getCar).post(upload.single('pic'), addPicToCar).put(updateCar).delete(deleteCar);

carsRouter.use('/:carId/reviews', getCarMW, reviewRouter);

module.exports = carsRouter;

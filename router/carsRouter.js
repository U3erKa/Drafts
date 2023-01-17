const carsRouter = require('express').Router();
const reviewRouter = require('./reviewRouter');
const { getCar: getCarMW } = require('../middleware/carMW');
const { createCar, getCars, getCar, updateCar, deleteCar } = require('../controllers/carController');

carsRouter.route('/').get(getCars).post(createCar);
carsRouter.route('/:carId').get(getCar).put(updateCar).delete(deleteCar);

carsRouter.use('/:carId/reviews', getCarMW, reviewRouter);

module.exports = carsRouter;

const carsRouter = require('express').Router();
const { createCar, getCars, getCar, updateCar, deleteCar } = require('../controllers/carController');

carsRouter.route('/').get(getCars).post(createCar);
carsRouter.route('/:carId').get(getCar).put(updateCar).delete(deleteCar);

module.exports = carsRouter;

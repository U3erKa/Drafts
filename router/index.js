const express = require('express');
const { createCar, getCars, getCar, updateCar } = require('../controllers/carController');

const router = express.Router();

router.route('/').get(getCars).post(createCar);
router.route('/:carId').get(getCar).put(updateCar)

module.exports = router;

const express = require('express');
const { createCar, getCars, getCar } = require('../controllers/carController');

const router = express.Router();

router.route('/').get(getCars).post(createCar);
router.route('/:carId').get(getCar)

module.exports = router;

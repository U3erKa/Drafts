const express = require('express');
const { createCar, getCars } = require('../controllers/carController');

const router = express.Router();

router.route('/cars').get(getCars).post(createCar);

module.exports = router;

const express = require('express');
const { Car } = require('./models');
const app = express();

app.use(express.json());

app.route('/cars').post(async (req, res, next) => {
  const { body } = req;

  const newCar = await Car.create(body);

  res.send({ car: newCar });
});

module.exports = app;

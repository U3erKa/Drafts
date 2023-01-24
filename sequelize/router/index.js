const router = require('express').Router();
const carsRouter = require('./carsRouter');
const sellerRouter = require('./sellerRouter');

router.use('/cars', carsRouter);
router.use('/sellers', sellerRouter);

module.exports = router;

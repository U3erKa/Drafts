import { Router } from 'express';
import userRouter from './userRouter.js';
import carsRouter from './carsRouter.js';
import sellerRouter from './sellerRouter.js';
const router = Router();

// router.use('/cars', carsRouter);
router.use('/sellers', sellerRouter);
router.use('/users', userRouter);

router.get('/', async (req, res) => {
  res.status(200).send('Hello world');
});

// app.route('/cars')
// app.route('/cars/:carId')

router.get('/test*', async (req, res) => {
  res.status(200).send(`${req.method} ${req.path}`);
});

router.get('*', async (req, res) => {
  res.status(200).send('404 not found');
});

export default router;

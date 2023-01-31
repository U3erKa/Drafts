import { Router } from 'express';

import { checkAccessToken } from '../middleware/token.mw';
import authRouter from './authRouter';
import userRouter from './userRouter';

const rootRouter = Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/auth', authRouter);

rootRouter.get('/secret', checkAccessToken, (req, res, next) => {
  res.send('This is secret route');
});
export default rootRouter;

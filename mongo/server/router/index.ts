import { Router } from 'express';

import { checkAccessToken } from '../middleware/token.mw';
import authRouter from './authRouter';
import messageRouter from './messageRouter';
import userRouter from './userRouter';

const rootRouter = Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/auth', authRouter);
rootRouter.use('/messages', checkAccessToken, messageRouter);

rootRouter.get('/secret', checkAccessToken, (req, res, next) => {
  res.send('This is secret route');
});
export default rootRouter;

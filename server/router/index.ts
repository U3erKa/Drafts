import { Router } from 'express';
import userRouter from './userRouter';

const rootRouter = Router();

rootRouter.use('/users', userRouter);

export default rootRouter;

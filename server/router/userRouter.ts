import { Router } from 'express';

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controller/userController';
import { checkAccessToken } from '../middleware/token.mw';
import messageRouter from './messageRouter';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(createUser);
userRouter.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

userRouter.use('/:userId/messages', checkAccessToken, messageRouter);

export default userRouter;

import { Router } from 'express';

import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controller/userController';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(createUser);
userRouter.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

export default userRouter;

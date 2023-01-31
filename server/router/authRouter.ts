import { Router } from 'express';

import * as AuthController from '../controller/authController';
import { checkRefreshToken } from '../middleware/token.mw';

const authRouter = Router();

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.post('/refresh', checkRefreshToken, AuthController.refresh);

export default authRouter;

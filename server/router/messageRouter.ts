import { Router } from 'express';

import { createMessage, getMessages } from '../controller/messageController';

const messageRouter = Router();

messageRouter.route('/').get(getMessages).post(createMessage);

export default messageRouter;

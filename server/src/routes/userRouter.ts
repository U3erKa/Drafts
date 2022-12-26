
import { Router } from 'express';
import { bodyParser, validateUser } from '../middleware/userMW.js';
import { addUserToDB, deleteUser, getUser, getUsers, updateUser } from '../controller/userController.js';

const router = Router();

router.use(bodyParser);

router.route('/').get(getUsers).post(validateUser, addUserToDB);

router.route('/:userId').get(getUser).put(validateUser, updateUser).delete(deleteUser);

export default router;
import { Router } from 'express';
import { bodyParser, validateUser } from '../middleware/userMW.js';
import { addUserToDB, deleteUser, getUser, getUsers, updateUser } from '../controller/userController.js';

const router = Router();

// app.use(bodyParser);
router.use('/users', bodyParser);

router.get('/', async (req, res) => {
  res.status(200).send('Hello world');
});

// app.route('/cars')
// app.route('/cars/:carId')

router.route('/users').get(getUsers).post(validateUser, addUserToDB);

router.route('/users/:userId').get(getUser).put(validateUser, updateUser).delete(deleteUser);

router.get('/test*', async (req, res) => {
  res.status(200).send(`${req.method} ${req.path}`);
});

router.get('*', async (req, res) => {
  res.status(200).send('404 not found');
});

export default router;

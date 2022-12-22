import express from 'express';
import { bodyParser, validateUser } from './middleware/userMW.js';
import { addUserToDB, deleteUser, getUser, getUsers, updateUser } from './controller/userController.js';

const app = express();
// app.use(bodyParser);
app.use('/users', bodyParser);

app.get('/', async (req, res) => {
  res.status(200).send('Hello world');
});

app.route('/users').get(getUsers).post(validateUser, addUserToDB);

app.route('/users/:userId').get(getUser).put(validateUser, updateUser).delete(deleteUser);

app.get('/test*', async (req, res) => {
  res.status(200).send(`${req.method} ${req.path}`);
});

app.get('*', async (req, res) => {
  res.status(200).send('404 not found');
});

export default app;

import express from 'express';
import { bodyParser, validateUser } from './middleware/userMW.js';
import { addUserToDB, deleteUser, getUser, getUsers, updateUser } from './controller/userController.js';

const app = express();

app.get('/', async (req, res) => {
  res.status(200).send('Hello world');
});

app.get('/users', getUsers);
app.get('/users/:userId', getUser);
app.post('/users', bodyParser, validateUser, addUserToDB);
app.put('/users/:userId', bodyParser, validateUser, updateUser);
app.delete('/users/:userId', deleteUser);

app.get('/test*', async (req, res) => {
  res.status(200).send(`${req.method} ${req.path}`);
});

app.get('*', async (req, res) => {
  res.status(200).send('404 not found');
});

export default app;

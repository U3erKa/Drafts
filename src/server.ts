import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { bodyParser, validateUser } from './middleware/userMW.js';
import { addUserToDB, getUsers } from './controller/userController.js';

const app = express();

const PORT = process.env.PORT ?? 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.join(__filename, '..'));

app.get('/', async (req, res) => {
  res.status(200).send('Hello world');
});

app.get('/users', getUsers);

app.post('/login', bodyParser, validateUser, addUserToDB);

app.get('/test*', async (req, res) => {
  res.status(200).send(`${req.method} ${req.path}`);
});

app.get('*', async (req, res) => {
  res.status(200).send('404 not found');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

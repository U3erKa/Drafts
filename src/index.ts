import express from 'express';
import path from 'path';
import * as yup from 'yup';
import { fileURLToPath } from 'url';

const app = express();
const bodyParser = express.json();

const PORT = process.env.PORT ?? 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.join(__filename, '..'));

const USER_SCHEMA = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});
type User = yup.InferType<typeof USER_SCHEMA>;

const DB: User[] = [
  // {
  //   login: 'user',
  //   password: 'U3erovich',
  // },
  // {
  //   login: 'user1',
  //   password: 'U3erovich2',
  // },
];

app.get('/', async (req, res) => {
  res.status(200).send('Hello world');
});

app.get('/users', async (req, res) => {
  res.status(200).send(DB);
});

app.post(
  '/login',
  bodyParser,
  async (req, res, next) => {
    try {
      await USER_SCHEMA.validate(req.body);
      next();
    } catch (error: any) {
      console.log(req.body);
      res.status(400).send(error.message);
    }
  },
  async (req, res) => {
    const userObj = { ...req.body, id: Date.now() };

    DB.push(userObj);
    res.send(userObj);
  }
);

app.get('/test*', async (req, res) => {
  res.status(200).send(`${req.method} ${req.path}`);
});

app.get('*', async (req, res) => {
  res.status(200).send('404 not found');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

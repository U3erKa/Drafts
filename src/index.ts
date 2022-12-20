import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT ?? 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.join(__filename, '..'));

const DB = [
  {
    login: 'user',
    password: 'U3erovich',
  },
  {
    login: 'user1',
    password: 'U3erovich2',
  },
];

const app = express();
const bodyParser = express.json();

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.get('/users', (req, res) => {
  res.status(200).send(DB);
});

app.post(
  '/login',
  bodyParser,
  (req, res) => {
    const userObj = req.body;
    const foundUser = DB.find((user) => user.login === userObj.login);

    if (foundUser?.password === userObj.password) {
      res.status(200).send('<div>Logged in!</div>');
    } else {
      res.status(400).send('<div>Invalid data</div>');
    }
  }
);

app.get('/test*', (req, res) => {
  res.status(200).send(`${req.method} ${req.path}`);
});

app.get('*', (req, res) => {
  res.status(200).send('404 not found');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

import { config as dotenv } from 'dotenv';
dotenv();

import http from 'http';
import app from './app';
import { BASE_URL, PORT } from './constants';

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started at http://${BASE_URL}:${PORT}`);
});

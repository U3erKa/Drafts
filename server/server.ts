import http from 'http';
import app from './app';

const server = http.createServer(app);

const BASE_URL = process.env.BASE_URL || 'localhost';
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server started at http://${BASE_URL}:${PORT}`);
});

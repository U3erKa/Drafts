import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';

const server = http.createServer(app);

const PORT = process.env.PORT ?? 3000;
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(path.join(__filename, '..'));

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// const fs = require('fs/promises');
const http = require('http');

const PORT = process.env.PORT ?? 3000;

const server = http.createServer(async (req: any, res: any) => {
  res.writeHead(200, {});
  res.end('Hello world!');
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

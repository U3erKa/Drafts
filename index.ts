// const fs = require('fs/promises');
const http = require('http');

const PORT = process.env.PORT ?? 3000;

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

const server = http.createServer(async (req: any, res: any) => {
  const { method, url } = req;
  switch (method) {
    case 'GET': {
      switch (url) {
        case '/': {
          res.end('<div>Hello world!</div>');
          break;
        }
        case '/about': {
          res.end('<div>about me</div>');
          break;
        }
        default: {
          res.end('404');
          break;
        }
      }
      res.writeHead(200, {});
      break;
    }
    case 'POST': {
      switch (url) {
        case '/login': {
          let json = '';
          req.on('data', (chunk: any) => {
            json += chunk;
          });
          req.on('end', () => {
            const userObj = JSON.parse(json);
            const foundUser = DB.find((user) => user.login === userObj.login);

            if (foundUser?.password === userObj.password) {
              res.end('<div>Logged in!</div>');
            } else {
              res.statusCode = 401;
              res.end('<div>Invalid data</div>');
            }
          });
          break;
        }
        default: {
          res.writeHead(404);
          res.end('User not found');
          break;
        }
      }
      res.writeHead(200, {});
      break;
    }
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

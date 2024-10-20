import http, { IncomingMessage, ServerResponse } from 'http';
import { users } from './users';

const host = 'localhost';
const port = 8000;

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  if (req.url === '/api/users' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(users));
  } else {
    console.log('req.url: ', req.url);
    console.log('req.method: ', req.method);
    res.writeHead(200);
    res.end('My server is on');
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

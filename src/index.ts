import http, { IncomingMessage, ServerResponse } from 'http';

import { handleGet } from './get';

const host = 'localhost';
const port = 8080;

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'GET') {
    handleGet(req, res);
  } else {
    res.writeHead(200);
    res.end('Server is on');
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

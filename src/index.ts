import http, { IncomingMessage, ServerResponse } from 'http';

import { handleGet } from './get';
import { handlePost } from './post';

const host = 'localhost';
const port = 8080;

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'GET') {
    handleGet(req, res);
  } else if (req.method === 'POST') {
    handlePost(req, res);
  } else {
    res.writeHead(200);
    res.end('Server is on');
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

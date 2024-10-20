import 'dotenv/config';
import http, { IncomingMessage, ServerResponse } from 'http';
import { handleGet } from './get';
import { handlePost } from './post';
import { handleDelete } from './delete';

const host = 'localhost';
const port = Number(process.env.PORT);

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  switch (req.method) {
    case 'GET':
      handleGet(req, res);
      break;
    case 'POST':
      handlePost(req, res);
      break;
    case 'DELETE':
      handleDelete(req, res);
      break;
    default:
      res.writeHead(400);
      res.end('Server is on. With ability to handle GET, POST, DELETE requests.');
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

import 'dotenv/config';
import http, { IncomingMessage, ServerResponse } from 'http';
import { handleGet } from './get';
import { handlePost } from './post';
import { handleDelete } from './delete';
import { handlePut } from './put';

const host = 'localhost';
const port = Number(process.env.PORT);

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  try {
    switch (req.method) {
      case 'GET':
        handleGet(req, res);
        break;
      case 'POST':
        handlePost(req, res);
        break;
      case 'PUT':
        handlePut(req, res);
        break;
      case 'DELETE':
        handleDelete(req, res);
        break;
      default:
        res.writeHead(405);
        res.end('Method Not Allowed. Server is able to handle GET, POST, PUT, DELETE requests.');
    }
  } catch (err) {
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

import { IncomingMessage, ServerResponse } from 'http';
import { User, users } from './users';
import { validate as uuidValidate } from 'uuid';

const handleGet = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url && (req.url === '/api/users' || req.url === '/api/users/')) {
    res.writeHead(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  } else if (req.url && req.url.match(/^\/(api)\/(users)\/.{1,}/)) {
    const userId = req.url.replace('/api/users/', '');

    if (uuidValidate(userId)) {
      const requestedUser = users.filter((user: User) => user.id === userId);
      if (requestedUser[0]) {
        res.writeHead(200);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(requestedUser[0]));
      } else {
        res.writeHead(404);
        res.end(`User with user ID ${userId} does not exist`);
      }
    } else {
      res.writeHead(400);
      res.end(`User ID ${userId} is invalid`);
    }
  } else {
    res.writeHead(404);
    res.end('Endpoint does not exist.');
  }
};
export { handleGet };

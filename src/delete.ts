import { validate as uuidValidate } from 'uuid';
import { users } from './users';

import { IncomingMessage, ServerResponse } from 'http';
import getIndexInArray from './utils/get-index-in-array';
const handleDelete = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url && req.url.match(/^\/(api)\/(users)\/.{1,}/)) {
    const userId = req.url.replace('/api/users/', '');

    if (uuidValidate(userId)) {
      const indexOfUserInDB = getIndexInArray(userId);
      if (indexOfUserInDB || indexOfUserInDB === 0) {
        users.splice(indexOfUserInDB, 1);
        res.writeHead(204);
        res.end();
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

export { handleDelete };

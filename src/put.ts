import { IncomingMessage, ServerResponse } from 'http';
import { users } from './users';
import { validate as uuidValidate } from 'uuid';
import getIndexInArray from './utils/get-index-in-array';
import isArrayOfStrings from './utils/is-array-of-strings';

const handlePut = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url && req.url.match(/^\/(api)\/(users)\/.{1,}/)) {
    const userId = req.url.replace('/api/users/', '');

    if (uuidValidate(userId)) {
      const indexOfUserInDB = getIndexInArray(userId);
      if (indexOfUserInDB || indexOfUserInDB === 0) {
        req.on('data', (chunck: Buffer) => {
          try {
            const userData = JSON.parse(chunck.toString());
            let keyOfUserData: string;
            for (keyOfUserData in userData) {
              if (
                (keyOfUserData === 'username' && typeof userData[keyOfUserData] !== 'string') ||
                (keyOfUserData === 'age' && typeof userData[keyOfUserData] !== 'number') ||
                (keyOfUserData === 'hobbies' &&
                  (!Array.isArray(userData.hobbies) || !isArrayOfStrings(userData.hobbies)))
              ) {
                res.writeHead(400);
                res.end('Incorrect data type provided.');
                return false;
              }
            }

            for (keyOfUserData in userData) {
              if (keyOfUserData === 'username') {
                users[indexOfUserInDB].username = userData[keyOfUserData];
              }
              if (keyOfUserData === 'age') {
                users[indexOfUserInDB].age = userData[keyOfUserData];
              }
              if (keyOfUserData === 'hobbies') {
                users[indexOfUserInDB].hobbies = userData[keyOfUserData];
              }
            }

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(users[indexOfUserInDB]));
          } catch (err: unknown) {
            res.writeHead(400);
            res.end('Incorrect data provided. New user data must be in the correct JSON format.');
            return false;
          }
        });
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
export { handlePut };

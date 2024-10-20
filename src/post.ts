import { IncomingMessage, ServerResponse } from 'http';
import { User, users } from './users';
import { v4 as uuidv4 } from 'uuid';

const handlePost = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url && (req.url === '/api/users' || req.url === '/api/users/')) {
    req.on('data', (chunck: Buffer) => {
      try {
        const userData: User = JSON.parse(chunck.toString());

        const newUser: User = {
          id: uuidv4(),
          username: userData.username,
          age: userData.age,
          hobbies: userData.hobbies,
        };
        users.push(newUser);

        if (newUser) {
          res.setHeader('Content-Type', 'application/json');
          res.writeHead(201);
          res.end(JSON.stringify(newUser));
        }
      } catch (err: unknown) {
        res.writeHead(400);
        res.end(
          'Incorrect data provided. New user should contain username, age, hobbies and be in the correct JSON format.',
        );
        return false;
      }
    });
  } else {
    res.writeHead(404);
    res.end('Endpoint does not exist.');
  }
};
export { handlePost };

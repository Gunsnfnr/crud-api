import { v4 as uuidv4 } from 'uuid';
const users: User[] = [];

interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

const userId = uuidv4();

const testUser = {
  id: userId,
  username: 'Test user',
  age: 18,
  hobbies: [],
};

users.push(testUser);

export { users, User };

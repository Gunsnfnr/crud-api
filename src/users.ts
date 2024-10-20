const users: User[] = [];

interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export { users, User };

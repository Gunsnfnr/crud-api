const users: User[] = [];

interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

const testUser = {
  id: '001',
  username: 'Test user',
  age: 18,
  hobbies: [],
};

users.push(testUser);

export { users };

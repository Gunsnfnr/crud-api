import { users } from '../users';

export default function getIndexInArray(idOfUser: string): number | null {
  let index = null;
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].id === idOfUser) {
      return i;
    }
  }
  return index;
}

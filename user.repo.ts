import { User } from "./user.entity";

async function createUser(user: User): Promise<User | undefined> {
  return user;
}

async function getUserByEmail(email: string): Promise<User | undefined> {
  return undefined;
}

async function getUserById(id: string): Promise<User | undefined> {
  return undefined;
}

async function deleteUser(id: string) {
}

async function updateUser(id: string, user: User): Promise<User | undefined>  {
  return user;
}

async function checkUserPassword(email: string, password: string): Promise<boolean> {
  return true;
}


export {
  createUser,
  getUserByEmail,
  getUserById,
  deleteUser,
  updateUser,
  checkUserPassword
};
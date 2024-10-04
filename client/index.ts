import { ChannelCredentials } from '@grpc/grpc-js'
import { UserServiceClient } from '../proto/user_grpc_pb'
import { DeleteUserRequest, GetUserRequest, User } from '../proto/user_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

const client = new UserServiceClient('0.0.0.0:3333', ChannelCredentials.createInsecure());

function getUserById(id: number): Promise<User | undefined> {
  return new Promise((resolve, reject) => {
    const request = new GetUserRequest();
    request.setId(id);
    client.getUser(request, (err, response) => {
      if (err) {
        console.error(err);
        return undefined;
      }
      console.log("getUser", response.toObject());
      return response;
    });
  });
}

function getUsers(): Promise<User.AsObject[]> {
  return new Promise((resolve, reject) => {
    const empty = new Empty();
    const call = client.getUsers(empty);
    const users: User.AsObject[] = [];
    call.on('data', (response: User) => {
      users.push(response.toObject());
    });
    call.on('end', () => {
      resolve(users);
    });
    call.on('error', (err) => {
      reject(err);
    });
  });
}

function createUser(user: User): Promise<User.AsObject> {
  return new Promise((resolve, reject) => {
    client.createUser(user, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve(response.toObject());
    });
  });
}

function updateUser(user: User): Promise<User.AsObject> {
  return new Promise((resolve, reject) => {
    client.updateUser(user, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve(response.toObject());
    });
  });
}

function deleteUser(id: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const request = new DeleteUserRequest();
    request.setId(id);
    client.deleteUser(request, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve(response.getSuccess());
    });
  });
}

async function main() {

  // listando todos os usuários
  console.log("**** Listando todos os usuários");
  const users = await getUsers();
  console.log(users);

  // criando um novo usuário
  console.log("**** Criando um novo usuário");
  const user = new User();
  user.setId(3);
  user.setName('Maria Oliveira');
  user.setEmail('maria@gmail.com');
  user.setPassword('MariaSenha134');
  await createUser(user);
  console.log(await getUsers());

  // atualizando um usuário
  console.log("**** Atualizando um usuário");
  user.setName('Maria Oliveira da Silva');
  user.setPassword('MariaSenha134567');
  await updateUser(user);
  console.log(await getUsers());

  // removendo um usuário
  console.log("**** Removendo um usuário");
  await deleteUser(3);
  console.log(await getUsers());

}

main();

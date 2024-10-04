import { DeleteUserRequest, DeleteUserResponse, GetUserRequest, User } from '../proto/user_pb';
import { IUserServiceServer } from '../proto/user_grpc_pb';
import { sendUnaryData, ServerUnaryCall, ServerWritableStream } from '@grpc/grpc-js';
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import grpc from '@grpc/grpc-js';

const users: User.AsObject[] = [
  {
    id: 1,
    name: 'Joao da Silva',
    email: 'joao@gmail.com',
    password: 'minhasenha123',
  },
  {
    id: 2,
    name: 'Jane Oliveira',
    email: 'jane@bmail.com',
    password: '123senha',
  },
];

export class UserServiceServer implements IUserServiceServer {
  
  [name: string]: grpc.UntypedHandleCall;

  getUser(call: ServerUnaryCall<GetUserRequest, User>,callback: sendUnaryData<User>): void {
    const user = users.find((user) => user.id === call.request.getId());
    if (user) {
      let u = new User()
        .setId(user.id)
        .setName(user.name)
        .setEmail(user.email)
        .setPassword(user.password);
      callback(null, u);
    } else {
      callback(new Error('User not found'), null);
    }
  }

  getUsers(call: ServerWritableStream<Empty, User>): void {
    users.forEach((user) => {
      call.write(new User().setId(user.id).setName(user.name).setEmail(user.email).setPassword(user.password));
    });
    call.end();
  }

  createUser(call: ServerUnaryCall<User, User>, callback: sendUnaryData<User>): void {
    const user = call.request.toObject();
    users.push(user);
    callback(null, new User().setId(user.id).setName(user.name).setEmail(user.email).setPassword(user.password));
  }

  updateUser(call: ServerUnaryCall<User, User>,callback: sendUnaryData<User>): void {
    const user = users.find((user) => user.id === call.request.getId());
    if (user) {
      user.name = call.request.getName();
      user.email = call.request.getEmail();
      user.password = call.request.getPassword();
      callback(null, new User().setId(user.id).setName(user.name).setEmail(user.email).setPassword(user.password));
    } else {
      callback(new Error('User not found'), null);
    }
  }

  deleteUser(
    call: ServerUnaryCall<DeleteUserRequest, DeleteUserResponse>,
    callback: sendUnaryData<DeleteUserResponse>
  ): void 
  {
    const index = users.findIndex((user) => user.id === call.request.getId());
    if (index > -1) {
      users.splice(index, 1);
      callback(null, new DeleteUserResponse().setSuccess(true));
    } else {
      callback(new Error('User not found'), null);
    }
  }

}
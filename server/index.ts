import { Server, ServerCredentials } from '@grpc/grpc-js';
import { UserServiceService } from '../proto/user_grpc_pb';
import { UserServiceServer } from './server';

const server = new Server();

server.addService(UserServiceService, new UserServiceServer());

const port: number = 3333;
server.bindAsync(`0.0.0.0:${port}`, ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server running on ${port}`);
})


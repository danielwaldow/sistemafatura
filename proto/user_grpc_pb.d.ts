// package: users
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IGetUser;
    getUsers: IUserServiceService_IGetUsers;
    createUser: IUserServiceService_ICreateUser;
    updateUser: IUserServiceService_IUpdateUser;
    deleteUser: IUserServiceService_IDeleteUser;
}

interface IUserServiceService_IGetUser extends grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.User> {
    path: "/users.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IGetUsers extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, user_pb.User> {
    path: "/users.UserService/GetUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/users.UserService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IUpdateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/users.UserService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IDeleteUser extends grpc.MethodDefinition<user_pb.DeleteUserRequest, user_pb.DeleteUserResponse> {
    path: "/users.UserService/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<user_pb.DeleteUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.DeleteUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    getUser: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.User>;
    getUsers: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, user_pb.User>;
    createUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    updateUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    deleteUser: grpc.handleUnaryCall<user_pb.DeleteUserRequest, user_pb.DeleteUserResponse>;
}

export interface IUserServiceClient {
    getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUsers(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.User>;
    getUsers(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.User>;
    createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUsers(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.User>;
    public getUsers(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.User>;
    public createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
}

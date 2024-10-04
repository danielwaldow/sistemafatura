// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_DeleteUserRequest(arg) {
  if (!(arg instanceof user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type users.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_DeleteUserRequest(buffer_arg) {
  return user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_DeleteUserResponse(arg) {
  if (!(arg instanceof user_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type users.DeleteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_DeleteUserResponse(buffer_arg) {
  return user_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type users.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type users.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/users.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.User,
    requestSerialize: serialize_users_GetUserRequest,
    requestDeserialize: deserialize_users_GetUserRequest,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  getUsers: {
    path: '/users.UserService/GetUsers',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: user_pb.User,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  createUser: {
    path: '/users.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  updateUser: {
    path: '/users.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  deleteUser: {
    path: '/users.UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeleteUserRequest,
    responseType: user_pb.DeleteUserResponse,
    requestSerialize: serialize_users_DeleteUserRequest,
    requestDeserialize: deserialize_users_DeleteUserRequest,
    responseSerialize: serialize_users_DeleteUserResponse,
    responseDeserialize: deserialize_users_DeleteUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);

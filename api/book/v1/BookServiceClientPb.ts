/**
 * @fileoverview gRPC-Web generated client stub for api.book.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: api/book/v1/book.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_book_v1_book_pb from '../../../api/book/v1/book_pb';


export class BookServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetBook = new grpcWeb.MethodDescriptor(
    '/api.book.v1.BookService/GetBook',
    grpcWeb.MethodType.UNARY,
    api_book_v1_book_pb.GetBookRequest,
    api_book_v1_book_pb.GetBookResponse,
    (request: api_book_v1_book_pb.GetBookRequest) => {
      return request.serializeBinary();
    },
    api_book_v1_book_pb.GetBookResponse.deserializeBinary
  );

  getBook(
    request: api_book_v1_book_pb.GetBookRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_book_v1_book_pb.GetBookResponse>;

  getBook(
    request: api_book_v1_book_pb.GetBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_book_v1_book_pb.GetBookResponse) => void): grpcWeb.ClientReadableStream<api_book_v1_book_pb.GetBookResponse>;

  getBook(
    request: api_book_v1_book_pb.GetBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_book_v1_book_pb.GetBookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.book.v1.BookService/GetBook',
        request,
        metadata || {},
        this.methodDescriptorGetBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.book.v1.BookService/GetBook',
    request,
    metadata || {},
    this.methodDescriptorGetBook);
  }

}


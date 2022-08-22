/* eslint-disable */
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api.book.v1";

export interface GetBookRequest {
  /**
   * The name of the book to retrieve.
   * Format: publishers/{publisher}/books/{book}
   */
  name: string;
}

/** A representation of a book. */
export interface GetBookResponse {
  /** The format of the book. */
  format: GetBookResponse_Format;
  /** The name of the book */
  name: string;
}

/** Possible formats in which the book may be published. */
export enum GetBookResponse_Format {
  /** FORMAT_UNSPECIFIED - Default value. This value is unused. */
  FORMAT_UNSPECIFIED = 0,
  /** FORMAT_HARDBACK - The printed format, in hardback. */
  FORMAT_HARDBACK = 1,
  /** FORMAT_PAPERBACK - The printed format, in paperback. */
  FORMAT_PAPERBACK = 2,
  /** FORMAT_EBOOK - An electronic book format. */
  FORMAT_EBOOK = 3,
  /** FORMAT_AUDIOBOOK - An audio recording. */
  FORMAT_AUDIOBOOK = 4,
}

function createBaseGetBookRequest(): GetBookRequest {
  return { name: "" };
}

export const GetBookRequest = {
  encode(
    message: GetBookRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseGetBookResponse(): GetBookResponse {
  return { format: 0, name: "" };
}

export const GetBookResponse = {
  encode(
    message: GetBookResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.format !== 0) {
      writer.uint32(8).int32(message.format);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.format = reader.int32() as any;
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export type BookServiceService = typeof BookServiceService;
export const BookServiceService = {
  getBook: {
    path: "/api.book.v1.BookService/GetBook",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBookRequest) =>
      Buffer.from(GetBookRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBookRequest.decode(value),
    responseSerialize: (value: GetBookResponse) =>
      Buffer.from(GetBookResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetBookResponse.decode(value),
  },
} as const;

export interface BookServiceServer extends UntypedServiceImplementation {
  getBook: handleUnaryCall<GetBookRequest, GetBookResponse>;
}

export interface BookServiceClient extends Client {
  getBook(
    request: GetBookRequest,
    callback: (error: ServiceError | null, response: GetBookResponse) => void
  ): ClientUnaryCall;
  getBook(
    request: GetBookRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetBookResponse) => void
  ): ClientUnaryCall;
  getBook(
    request: GetBookRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetBookResponse) => void
  ): ClientUnaryCall;
}

export const BookServiceClient = makeGenericClientConstructor(
  BookServiceService,
  "api.book.v1.BookService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): BookServiceClient;
  service: typeof BookServiceService;
};

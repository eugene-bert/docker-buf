import * as jspb from 'google-protobuf'

import * as google_api_client_pb from '../../../google/api/client_pb'; // proto import: "google/api/client.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_resource_pb from '../../../google/api/resource_pb'; // proto import: "google/api/resource.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"


export class GetBookRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.AsObject;
  static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookRequest;
  static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;
}

export namespace GetBookRequest {
  export type AsObject = {
    name: string,
  }
}

export class Book extends jspb.Message {
  getName(): string;
  setName(value: string): Book;

  getTitle(): string;
  setTitle(value: string): Book;

  getAuthor(): string;
  setAuthor(value: string): Book;

  getFormat(): Format;
  setFormat(value: Format): Book;

  getIsbn(): string;
  setIsbn(value: string): Book;

  getPages(): number;
  setPages(value: number): Book;

  getPublicationYear(): number;
  setPublicationYear(value: number): Book;

  getDescription(): string;
  setDescription(value: string): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    name: string,
    title: string,
    author: string,
    format: Format,
    isbn: string,
    pages: number,
    publicationYear: number,
    description: string,
  }
}

export class GetBookResponse extends jspb.Message {
  getFormat(): Format;
  setFormat(value: Format): GetBookResponse;

  getName(): string;
  setName(value: string): GetBookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookResponse): GetBookResponse.AsObject;
  static serializeBinaryToWriter(message: GetBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookResponse;
  static deserializeBinaryFromReader(message: GetBookResponse, reader: jspb.BinaryReader): GetBookResponse;
}

export namespace GetBookResponse {
  export type AsObject = {
    format: Format,
    name: string,
  }
}

export class ListBooksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListBooksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBooksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBooksRequest;

  getFormat(): Format;
  setFormat(value: Format): ListBooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksRequest): ListBooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListBooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksRequest;
  static deserializeBinaryFromReader(message: ListBooksRequest, reader: jspb.BinaryReader): ListBooksRequest;
}

export namespace ListBooksRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    format: Format,
  }
}

export class ListBooksResponse extends jspb.Message {
  getBooksList(): Array<Book>;
  setBooksList(value: Array<Book>): ListBooksResponse;
  clearBooksList(): ListBooksResponse;
  addBooks(value?: Book, index?: number): Book;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBooksResponse;

  getTotalCount(): number;
  setTotalCount(value: number): ListBooksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksResponse): ListBooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListBooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksResponse;
  static deserializeBinaryFromReader(message: ListBooksResponse, reader: jspb.BinaryReader): ListBooksResponse;
}

export namespace ListBooksResponse {
  export type AsObject = {
    booksList: Array<Book.AsObject>,
    nextPageToken: string,
    totalCount: number,
  }
}

export class CreateBookRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateBookRequest;

  getBook(): Book | undefined;
  setBook(value?: Book): CreateBookRequest;
  hasBook(): boolean;
  clearBook(): CreateBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBookRequest): CreateBookRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBookRequest;
  static deserializeBinaryFromReader(message: CreateBookRequest, reader: jspb.BinaryReader): CreateBookRequest;
}

export namespace CreateBookRequest {
  export type AsObject = {
    parent: string,
    book?: Book.AsObject,
  }
}

export class UpdateBookRequest extends jspb.Message {
  getBook(): Book | undefined;
  setBook(value?: Book): UpdateBookRequest;
  hasBook(): boolean;
  clearBook(): UpdateBookRequest;

  getUpdateMask(): string;
  setUpdateMask(value: string): UpdateBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBookRequest): UpdateBookRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBookRequest;
  static deserializeBinaryFromReader(message: UpdateBookRequest, reader: jspb.BinaryReader): UpdateBookRequest;
}

export namespace UpdateBookRequest {
  export type AsObject = {
    book?: Book.AsObject,
    updateMask: string,
  }
}

export class DeleteBookRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBookRequest): DeleteBookRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBookRequest;
  static deserializeBinaryFromReader(message: DeleteBookRequest, reader: jspb.BinaryReader): DeleteBookRequest;
}

export namespace DeleteBookRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteBookResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteBookResponse;

  getMessage(): string;
  setMessage(value: string): DeleteBookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBookResponse): DeleteBookResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBookResponse;
  static deserializeBinaryFromReader(message: DeleteBookResponse, reader: jspb.BinaryReader): DeleteBookResponse;
}

export namespace DeleteBookResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class SearchBooksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): SearchBooksRequest;

  getQuery(): string;
  setQuery(value: string): SearchBooksRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchBooksRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchBooksRequest;

  getFormat(): Format;
  setFormat(value: Format): SearchBooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchBooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchBooksRequest): SearchBooksRequest.AsObject;
  static serializeBinaryToWriter(message: SearchBooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchBooksRequest;
  static deserializeBinaryFromReader(message: SearchBooksRequest, reader: jspb.BinaryReader): SearchBooksRequest;
}

export namespace SearchBooksRequest {
  export type AsObject = {
    parent: string,
    query: string,
    pageSize: number,
    pageToken: string,
    format: Format,
  }
}

export class SearchBooksResponse extends jspb.Message {
  getBooksList(): Array<Book>;
  setBooksList(value: Array<Book>): SearchBooksResponse;
  clearBooksList(): SearchBooksResponse;
  addBooks(value?: Book, index?: number): Book;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchBooksResponse;

  getTotalCount(): number;
  setTotalCount(value: number): SearchBooksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchBooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchBooksResponse): SearchBooksResponse.AsObject;
  static serializeBinaryToWriter(message: SearchBooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchBooksResponse;
  static deserializeBinaryFromReader(message: SearchBooksResponse, reader: jspb.BinaryReader): SearchBooksResponse;
}

export namespace SearchBooksResponse {
  export type AsObject = {
    booksList: Array<Book.AsObject>,
    nextPageToken: string,
    totalCount: number,
  }
}

export enum Format { 
  FORMAT_UNSPECIFIED = 0,
  FORMAT_HARDBACK = 1,
  FORMAT_PAPERBACK = 2,
  FORMAT_EBOOK = 3,
  FORMAT_AUDIOBOOK = 4,
}

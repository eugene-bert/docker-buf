import * as jspb from 'google-protobuf'

import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


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

export class GetBookResponse extends jspb.Message {
  getFormat(): GetBookResponse.Format;
  setFormat(value: GetBookResponse.Format): GetBookResponse;

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
    format: GetBookResponse.Format,
    name: string,
  }

  export enum Format { 
    FORMAT_UNSPECIFIED = 0,
    FORMAT_HARDBACK = 1,
    FORMAT_PAPERBACK = 2,
    FORMAT_EBOOK = 3,
    FORMAT_AUDIOBOOK = 4,
  }
}


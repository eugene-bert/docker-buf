# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from api.book.v1 import book_pb2 as api_dot_book_dot_v1_dot_book__pb2


class BookServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetBook = channel.unary_unary(
                '/api.book.v1.BookService/GetBook',
                request_serializer=api_dot_book_dot_v1_dot_book__pb2.GetBookRequest.SerializeToString,
                response_deserializer=api_dot_book_dot_v1_dot_book__pb2.GetBookResponse.FromString,
                )


class BookServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetBook(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_BookServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetBook': grpc.unary_unary_rpc_method_handler(
                    servicer.GetBook,
                    request_deserializer=api_dot_book_dot_v1_dot_book__pb2.GetBookRequest.FromString,
                    response_serializer=api_dot_book_dot_v1_dot_book__pb2.GetBookResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.book.v1.BookService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class BookService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetBook(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.book.v1.BookService/GetBook',
            api_dot_book_dot_v1_dot_book__pb2.GetBookRequest.SerializeToString,
            api_dot_book_dot_v1_dot_book__pb2.GetBookResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

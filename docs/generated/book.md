# API Reference

# Table of Contents


- Services
    - [BookService](#api.book.v1.bookservice)
  


- Messages
    - [Book](#book)
    - [CreateBookRequest](#createbookrequest)
    - [DeleteBookRequest](#deletebookrequest)
    - [DeleteBookResponse](#deletebookresponse)
    - [GetBookRequest](#getbookrequest)
    - [GetBookResponse](#getbookresponse)
    - [ListBooksRequest](#listbooksrequest)
    - [ListBooksResponse](#listbooksresponse)
    - [SearchBooksRequest](#searchbooksrequest)
    - [SearchBooksResponse](#searchbooksresponse)
    - [UpdateBookRequest](#updatebookrequest)
  


- Enums
    - [Format](#format)
  


- [Scalar Value Types](#scalar-value-types)



# BookService {#api.book.v1.bookservice}


## GetBook

> **rpc** GetBook([GetBookRequest](#getbookrequest))
    [GetBookResponse](#getbookresponse)

Get a single book by name
## ListBooks

> **rpc** ListBooks([ListBooksRequest](#listbooksrequest))
    [ListBooksResponse](#listbooksresponse)

List all books for a publisher with pagination
## CreateBook

> **rpc** CreateBook([CreateBookRequest](#createbookrequest))
    [Book](#book)

Create a new book
## UpdateBook

> **rpc** UpdateBook([UpdateBookRequest](#updatebookrequest))
    [Book](#book)

Update an existing book
## DeleteBook

> **rpc** DeleteBook([DeleteBookRequest](#deletebookrequest))
    [DeleteBookResponse](#deletebookresponse)

Delete a book
## SearchBooks

> **rpc** SearchBooks([SearchBooksRequest](#searchbooksrequest))
    [SearchBooksResponse](#searchbooksresponse)

Search books by title or author
 <!-- end methods -->
 <!-- end services -->

# Messages


## Book {#book}
A representation of a book.


| Field | Type | Description |
| ----- | ---- | ----------- |
| name | [ string](#string) | The resource name of the book. Format: publishers/{publisher}/books/{book} |
| title | [ string](#string) | The title of the book. |
| author | [ string](#string) | The author of the book. |
| format | [ Format](#format) | The format of the book. |
| isbn | [ string](#string) | ISBN number |
| pages | [ int32](#int32) | Number of pages |
| publication_year | [ int32](#int32) | Publication year |
| description | [ string](#string) | Book description |
 <!-- end Fields -->
 <!-- end HasFields -->


## CreateBookRequest {#createbookrequest}
Request message for CreateBook


| Field | Type | Description |
| ----- | ---- | ----------- |
| parent | [ string](#string) | The parent publisher resource name. Format: publishers/{publisher} |
| book | [ Book](#book) | The book to create. |
 <!-- end Fields -->
 <!-- end HasFields -->


## DeleteBookRequest {#deletebookrequest}
Request message for DeleteBook


| Field | Type | Description |
| ----- | ---- | ----------- |
| name | [ string](#string) | The name of the book to delete. Format: publishers/{publisher}/books/{book} |
 <!-- end Fields -->
 <!-- end HasFields -->


## DeleteBookResponse {#deletebookresponse}
Response message for DeleteBook


| Field | Type | Description |
| ----- | ---- | ----------- |
| success | [ bool](#bool) | Success indicator |
| message | [ string](#string) | Optional message |
 <!-- end Fields -->
 <!-- end HasFields -->


## GetBookRequest {#getbookrequest}



| Field | Type | Description |
| ----- | ---- | ----------- |
| name | [ string](#string) | The name of the book to retrieve. Format: publishers/{publisher}/books/{book} |
 <!-- end Fields -->
 <!-- end HasFields -->


## GetBookResponse {#getbookresponse}
Response for GetBook


| Field | Type | Description |
| ----- | ---- | ----------- |
| format | [ Format](#format) | The format of the book. |
| name | [ string](#string) | The name of the book |
 <!-- end Fields -->
 <!-- end HasFields -->


## ListBooksRequest {#listbooksrequest}
Request message for ListBooks


| Field | Type | Description |
| ----- | ---- | ----------- |
| parent | [ string](#string) | The parent publisher resource name. Format: publishers/{publisher} |
| page_size | [ int32](#int32) | The maximum number of books to return. |
| page_token | [ string](#string) | The page token for pagination. |
| format | [ Format](#format) | Optional filter by format |
 <!-- end Fields -->
 <!-- end HasFields -->


## ListBooksResponse {#listbooksresponse}
Response message for ListBooks


| Field | Type | Description |
| ----- | ---- | ----------- |
| books | [repeated Book](#book) | The list of books. |
| next_page_token | [ string](#string) | Token for the next page of results. |
| total_count | [ int32](#int32) | Total count of books |
 <!-- end Fields -->
 <!-- end HasFields -->


## SearchBooksRequest {#searchbooksrequest}
Request message for SearchBooks


| Field | Type | Description |
| ----- | ---- | ----------- |
| parent | [ string](#string) | The parent publisher resource name. Format: publishers/{publisher} |
| query | [ string](#string) | Search query (searches title and author) |
| page_size | [ int32](#int32) | Maximum number of results |
| page_token | [ string](#string) | Page token for pagination |
| format | [ Format](#format) | Optional filter by format |
 <!-- end Fields -->
 <!-- end HasFields -->


## SearchBooksResponse {#searchbooksresponse}
Response message for SearchBooks


| Field | Type | Description |
| ----- | ---- | ----------- |
| books | [repeated Book](#book) | The list of books matching the search. |
| next_page_token | [ string](#string) | Token for the next page of results. |
| total_count | [ int32](#int32) | Total count of matching books |
 <!-- end Fields -->
 <!-- end HasFields -->


## UpdateBookRequest {#updatebookrequest}
Request message for UpdateBook


| Field | Type | Description |
| ----- | ---- | ----------- |
| book | [ Book](#book) | The book to update. |
| update_mask | [ string](#string) | The list of fields to update. Use "*" to update all fields. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

# Enums


## Format {#format}
Possible formats in which the book may be published.

| Name | Number | Description |
| ---- | ------ | ----------- |
| FORMAT_UNSPECIFIED | 0 | Default value. This value is unused. |
| FORMAT_HARDBACK | 1 | The printed format, in hardback. |
| FORMAT_PAPERBACK | 2 | The printed format, in paperback. |
| FORMAT_EBOOK | 3 | An electronic book format. |
| FORMAT_AUDIOBOOK | 4 | An audio recording. |


 <!-- end Enums -->
 <!-- end Files -->

# Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <div><h4 id="double" /></div><a name="double" /> double |  | double | double | float |
| <div><h4 id="float" /></div><a name="float" /> float |  | float | float | float |
| <div><h4 id="int32" /></div><a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <div><h4 id="int64" /></div><a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <div><h4 id="uint32" /></div><a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <div><h4 id="uint64" /></div><a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <div><h4 id="sint32" /></div><a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <div><h4 id="sint64" /></div><a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <div><h4 id="fixed32" /></div><a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <div><h4 id="fixed64" /></div><a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <div><h4 id="sfixed32" /></div><a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <div><h4 id="sfixed64" /></div><a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <div><h4 id="bool" /></div><a name="bool" /> bool |  | bool | boolean | boolean |
| <div><h4 id="string" /></div><a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <div><h4 id="bytes" /></div><a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |

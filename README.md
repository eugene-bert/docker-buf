# docker-buf

Extended docker [bufbuild](https://docs.buf.build/installation#using-the-docker-image) functionality based on [bufbuild/buf docker image](https://hub.docker.com/r/bufbuild/buf)

### Plugins included:
- [gRPC-Go](https://google.golang.org/grpc)
- [protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc)
- [protoc-gen-go](https://pkg.go.dev/github.com/golang/protobuf/protoc-gen-go)
- [protoc-gen-grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway)
- [protoc-gen-openapiv2](https://github.com/grpc-ecosystem/grpc-gateway)
- [protoc-gen-go](https://google.golang.org/protobuf/cmd/protoc-gen-go)
- [protoc-gen-go-grpc](https://google.golang.org/grpc/cmd/protoc-gen-go-grpc)
- [protoc-gen-validate](https://github.com/envoyproxy/protoc-gen-validate)
- [protoc-gen-ts_proto](https://www.npmjs.com/package/ts-proto)
- [protoc-gen-grpc-web](https://github.com/grpc/grpc-web)
- [gRPC-python](https://buf.build/grpc/python)
- [protocolbuffers-python](https://buf.build/protocolbuffers/python)
- [protoc-gen-bruno](https://github.com/eugene-bert/protoc-gen-bruno) - Generates Bruno API collections

## Usage

```
$ make docker-buf
```


## Directory / File Structure

```
.
├── api
|   └── book
|      └── v1
|        └── book.proto         # .proto file sample
├── docs
|   └── generated
|      └── template.gotmpl      # doc api template
├── .gitignore
├── book.config.swagger.yaml   # swagger config file
├── buf.gen.yaml 
├── buf.work.yaml 
├── buf.yaml
├── Dockerfile
├── docker-compose.yaml
├── License.md
├── Makefile
└── README.md
```

- [buf-gen-yaml](https://docs.buf.build/configuration/v1/buf-gen-yaml)
- [buf-work-yaml](https://docs.buf.build/configuration/v1/buf-work-yaml)
- [buf-yaml](https://docs.buf.build/configuration/v1/buf-yaml)

### Bufbuild installation & configuration for local development

1. Installation: https://docs.buf.build/installation
2. ```make buf-build```
3. To make your editor recognize Buf modules(external library) follow this instructions: https://docs.buf.build/editor-integration

To compile proto files for the application, run the following command (_can be run without bufbuild configured locally_):
```
make docker-buf
```

### Bruno API Collections

The generated Bruno API collections will be available in `bruno/collections/` directory. To use them:

1. Open [Bruno](https://www.usebruno.com/)
2. Click "Open Collection"
3. Navigate to `bruno/collections` folder
4. Select environment (Local, Development, Staging, Production)

The collections include:
- HTTP requests from `google.api.http` annotations
- gRPC requests from service definitions
- Auto-generated example request bodies
- Multi-environment support (Dev, Staging, Production)

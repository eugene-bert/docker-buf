# docker-hub

Extended docker [bufbuild](https://docs.buf.build/installation#using-the-docker-image) functionality based on [bufbuild/buf docker image](https://hub.docker.com/r/bufbuild/buf)

### Plugins included: 
- [gRPC-Go](google.golang.org/grpc)
- [protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc)
- [protoc-gen-go](https://pkg.go.dev/github.com/golang/protobuf/protoc-gen-go)
- [protoc-gen-grpc-gateway](github.com/grpc-ecosystem/grpc-gateway)
- [protoc-gen-openapiv2](github.com/grpc-ecosystem/grpc-gateway)
- [protoc-gen-go](google.golang.org/protobuf/cmd/protoc-gen-go)
- [protoc-gen-go-grpc](google.golang.org/grpc/cmd/protoc-gen-go-grpc)
- [protoc-gen-validate](github.com/envoyproxy/protoc-gen-validate)


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
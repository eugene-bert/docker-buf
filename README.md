# docker-buf

Extended Docker image for [Buf](https://buf.build) with comprehensive protoc plugin support.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/eugene-bert/docker-buf/blob/main/License.md)
[![Docker](https://img.shields.io/badge/docker-latest-blue.svg)](https://hub.docker.com/r/bufbuild/buf)
[![Go](https://img.shields.io/badge/go-1.25-00ADD8.svg)](https://golang.org/)

Based on the official [bufbuild/buf Docker image](https://hub.docker.com/r/bufbuild/buf), this image includes additional protoc plugins for generating code in multiple languages and formats

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

## Quick Start

```bash
# Generate code using the Docker image
make docker-buf

# Or run manually
docker build -t docker-buf:latest .
docker run --rm -v $(pwd):/mnt/pwd -w /mnt/pwd docker-buf:latest generate --template buf.gen.yaml --path api
```

## Available Make Targets

```bash
make help          # Show all available targets
make docker-buf    # Build Docker image and generate code
make buf-build     # Update buf dependencies and build
make swagger-ui    # Start Swagger UI in Docker
make clean         # Clean all generated files
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

## Configuration Files

### buf.yaml
The main Buf configuration file using **v2** format with:
- External dependencies from Buf Schema Registry
- Standard linting rules
- Breaking change detection

### buf.gen.yaml
Code generation configuration using **v2** format with:
- Managed mode enabled for consistent package names
- Multiple plugin configurations for different languages
- Environment-specific settings

## Requirements

- Docker (with Compose v2)
- Make (optional, but recommended)
- For local development: [Buf CLI](https://docs.buf.build/installation)

## Troubleshooting

### Permission Issues
If you encounter permission issues with generated files:
```bash
make clean
sudo make docker-buf
```

### Docker Build Fails
Ensure you have the latest Docker version:
```bash
docker --version  # Should be 20.10+
docker compose version  # Should be v2+
```

### Node Dependencies
If npm dependencies are out of date:
```bash
npm install
make docker-buf
```

## Version Information

- **Buf**: 1.49.0
- **Go**: 1.25
- **Node**: Alpine (latest)
- **Configuration**: v2 format

## Contributing

Issues and pull requests are welcome! Please check the [issue tracker](https://github.com/eugene-bert/docker-buf/issues).

## License

[MIT License](License.md)

Docker image extending Buf with protoc plugins. Build: `make docker-buf`.

Dockerfile installs buf + protoc-gen-go, grpc-gateway, openapiv2, etc. Multi-stage build.

CI: `v*` tags trigger GHCR push. Tags: `{{version}}` (no v prefix). Image: `ghcr.io/eugene-bert/docker-buf`.

Makefile targets: docker-buf (build+generate), buf-build (deps), swagger-ui, clean.

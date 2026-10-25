# docker-buf

Extended Docker image for Buf with protoc plugin support. Includes protoc-gen-go, protoc-gen-grpc-gateway, protoc-gen-openapiv2, and more.

## Commands

```bash
make docker-buf     # build image + generate code from buf.gen.yaml
make buf-build      # update buf deps + build
make swagger-ui     # start Swagger UI in Docker
make clean          # remove generated files
```

## CI/CD

- `publish_to_github.yml` — triggered by `v*` tags, builds and pushes to GHCR
- GHCR tags: `{{version}}` (semver, e.g. `1.0.0`), branch name
- Image: `ghcr.io/eugene-bert/docker-buf`

## Key files

- `Dockerfile` — multi-stage build installing buf + all protoc plugins
- `Makefile` — build and generate commands
- `buf.gen.yaml` — code generation config (if present in consuming project)

## Important

- Release only runs on `v*` tags (not on push to main)
- Image bundles Go protoc plugins — versions pinned in Dockerfile

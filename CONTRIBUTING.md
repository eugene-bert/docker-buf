# Contributing

## Building

```bash
make docker-buf    # builds Docker image locally
```

## Releasing

1. Update plugin versions in Dockerfile
2. Tag: `git tag v1.x.x && git push origin v1.x.x`
3. CI builds and pushes to GHCR

## Testing

Run `make docker-buf` against a project with `buf.gen.yaml` to verify code generation works.

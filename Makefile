.PHONY: docker-buf buf-build swagger-ui clean help

# Default target
help:
	@echo "Available targets:"
	@echo "  docker-buf    - Build Docker image and generate code"
	@echo "  buf-build     - Update buf dependencies and build"
	@echo "  swagger-ui    - Start Swagger UI in Docker"
	@echo "  clean         - Clean generated files"
	@echo "  help          - Show this help message"

docker-buf:
	docker build --tag docker-buf:latest --file Dockerfile .
	docker run --rm -v $(shell pwd):/mnt/pwd -w /mnt/pwd docker-buf:latest generate --template buf.gen.yaml --path api

# buf update dependencies
buf-build:
	buf mod update
	buf build

swagger-ui:
	docker compose -f docker-compose.yaml up

# Clean generated files
clean:
	rm -rf bruno/collections
	rm -rf packages/api-book-grpc/nodejs/src/protobuf
	rm -rf packages/api-book-grpc/python
	rm -f *.swagger.json
	rm -f docs/generated/*.md

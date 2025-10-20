FROM golang:1.25-alpine AS golang

ENV GOOS=linux \
    CGO_ENABLED=0 \
    GOPATH=/go

RUN apk add --no-cache git

# Install all Go protoc plugins in a single layer
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest && \
    go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest && \
    go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest && \
    go install github.com/envoyproxy/protoc-gen-validate@latest && \
    go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@latest && \
    go install github.com/eugene-bert/protoc-gen-bruno@v0.5.4

FROM node:22-alpine AS node

WORKDIR /usr/app
COPY package.json /usr/app/package.json
RUN npm install

FROM bufbuild/buf:1.49.0 AS buf

# Copy Go binaries from golang stage
COPY --from=golang /go/bin /go/bin

# Copy Node.js binaries and modules from node stage
COPY --from=node /usr/app/node_modules /node_modules
COPY --from=node /usr/local/bin /usr/local/bin
COPY --from=node /usr/app/node_modules/protoc-gen-grpc-web/bin/protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web
# Install runtime dependencies
RUN apk add --no-cache libstdc++

# Set up PATH
ENV PATH="/go/bin:/usr/local/bin:${PATH}"

# Set labels for metadata
LABEL maintainer="eugene-bert" \
      description="Extended buf Docker image with multiple protoc plugins" \
      version="2.0"

ENTRYPOINT ["/usr/local/bin/buf"]
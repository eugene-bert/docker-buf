FROM golang:1.27-alpine AS golang

ENV GOOS=linux \
    CGO_ENABLED=0 \
    GOPATH=/go

RUN apk add --no-cache git

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.36.11 && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.6.2 && \
    go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.29.0 && \
    go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.29.0 && \
    go install github.com/envoyproxy/protoc-gen-validate@v1.3.3 && \
    go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@v1.5.1 && \
    go install github.com/eugene-bert/protoc-gen-bruno@v0.5.4

FROM node:25-alpine AS node

WORKDIR /usr/app
COPY package.json /usr/app/package.json
RUN npm install

FROM bufbuild/buf:1.73.0 AS buf

# Copy Go binaries from golang stage
COPY --from=golang /go/bin /go/bin

# Copy Node.js binaries and modules from node stage
COPY --from=node /usr/app/node_modules /node_modules
COPY --from=node /usr/local/bin /usr/local/bin
COPY --from=node /usr/app/node_modules/protoc-gen-grpc-web/bin/protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web
RUN apk add --no-cache libstdc++

ENV PATH="/go/bin:/usr/local/bin:${PATH}"

LABEL maintainer="eugene-bert" \
      description="Extended buf Docker image with multiple protoc plugins" \
      version="2.1"

ENTRYPOINT ["/usr/local/bin/buf"]

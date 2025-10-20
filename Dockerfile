FROM golang:1.25-alpine AS golang

ENV GOOS=linux CGO_ENABLED=0

RUN apk add --no-cache git

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest
RUN go install github.com/envoyproxy/protoc-gen-validate@latest
RUN go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@latest
RUN go install github.com/eugene-bert/protoc-gen-bruno@v0.5.4

FROM node:alpine AS node

WORKDIR /usr/app
COPY package.json /usr/app/package.json
RUN npm install

FROM bufbuild/buf:latest AS buf

COPY --from=golang /go/bin /go/bin
COPY --from=node /usr/app/node_modules /node_modules
COPY --from=node /usr/local/bin /usr/local/bin
COPY --from=node /usr/app/node_modules/protoc-gen-grpc-web/bin/protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web

RUN apk add --no-cache libstdc++

ENV PATH="/go/bin:${PATH}"
ENV PATH="/usr/local/bin:${PATH}"

ENTRYPOINT ["/usr/local/bin/buf"]
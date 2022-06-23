FROM golang:1.17-alpine as golang

ENV GOOS=linux GOARCH=amd64 CGO_ENABLED=0 GO111MODULE=on

RUN go get -u google.golang.org/grpc
RUN go get -u github.com/golang/protobuf/protoc-gen-go
RUN go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc

RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
RUN go install github.com/envoyproxy/protoc-gen-validate@latest

FROM bufbuild/buf:1.6.0 as buf

FROM alpine:3.16.0 as alpine

COPY --from=golang /go/bin /go/bin
COPY --from=buf /usr/local/bin/buf /usr/local/bin/buf

ENV PATH="/go/bin:${PATH}"

ENTRYPOINT ["/usr/local/bin/buf"]
docker-buf:
	docker build --tag docker-buf --file Dockerfile .
	docker run  -v `pwd`:/mnt/pwd -w /mnt/pwd docker-buf generate --template buf.gen.yaml --path api

# buf update dependencies
buf-build:
	buf mod update
	buf build

swagger-ui:
	 docker-compose -f docker-compose.yaml up

docker-buf:
	docker build --tag docker-buf --file Dockerfile .
	docker run  -v `pwd`:/mnt/pwd -w /mnt/pwd docker-buf mod update
	docker run  -v `pwd`:/mnt/pwd -w /mnt/pwd docker-buf build
	docker run  -v `pwd`:/mnt/pwd -w /mnt/pwd docker-buf generate --template buf.gen.yaml --path api

swagger-ui:
	 docker-compose -f docker-compose.yaml up

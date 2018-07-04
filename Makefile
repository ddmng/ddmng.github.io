build:
	docker build -t rdaneel/my-hyperapp:dev .

npmi:
	docker run -ti --rm -v $$(pwd)/:/ngapp rdaneel/my-hyperapp:dev npm i

run: build
	docker run -ti --rm -p 8081:8081 -v $$(pwd)/:/ngapp rdaneel/my-hyperapp:dev npm run serve

shell: build
	docker run -ti --rm -v $$(pwd)/:/ngapp rdaneel/my-hyperapp:dev ash

dist: build
	docker run -ti --rm -v $$(pwd)/:/ngapp rdaneel/my-hyperapp:dev npm run build

serve: build npmi dist
	docker run -ti --rm -v $$(pwd)/dist:/usr/share/nginx/html -p 8082:80 nginx:alpine nginx -g 'daemon off;'

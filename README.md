## To start docker application

First build a docker image by running
docker build -t getawapp:dev1 .

Then run docker container with docker
docker run -it -v \${PWD}:/client -v /client/node_modules -p 3000:3000 --rm getawapp:dev1

To build a docker image and run using docker-compose run
docker-compose up -d --build

To stop docker-compose run
docker-compose stop

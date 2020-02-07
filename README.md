## To start docker application

First build a docker image by running
docker build -t getawapp:dev1 .

Then run docker container
docker run -v \${PWD}:/client -v /client/node_modules -p 3000:3000 --rm getawapp:dev1

# base image
FROM node:12-alpine

# set working dir
WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

# install and cache dependencies
COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json
RUN npm install --silent

# start app
CMD ["npm", "start"]
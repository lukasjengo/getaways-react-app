# base image
FROM node:12-alpine

# set working dir
WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

# install and cache dependencies
COPY package.json /client/package.json
RUN npm install --silent
RUN npm install react-scripts@3.2.0 -g --silent

# start app
CMD ["npm", "start"]
# base image
FROM node:12-stretch

# set working dir
WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

# install and cache dependencies
COPY package.json /client/package.json
RUN npm install
RUN npm install react-scripts@3.2.0 -g

# start app
CMD ["npm", "start"]
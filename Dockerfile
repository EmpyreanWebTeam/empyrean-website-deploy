# pull official base image
FROM node:16

RUN export DOCKER_CLIENT_TIMEOUT=120
RUN export COMPOSE_HTTP_TIMEOUT=120

# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json yarn.lock ./
COPY package.json ./

# add app
COPY . ./app
RUN yarn install

# start app
# CMD ["npm", "start"]
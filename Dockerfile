FROM node:latest

ARG target
RUN npm install -g nodemon

WORKDIR /app

COPY ${target}/package*.json ./
RUN npm install

COPY ${target} ./
CMD npm start
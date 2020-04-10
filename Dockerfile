FROM node:12-alpine

WORKDIR /usr/src/app
COPY . .
RUN rm -rf ui
CMD npm --prefix server start

FROM node:10-alpine

WORKDIR /usr/src/app
COPY . .
RUN npm --prefix ui install
RUN npm --prefix server install
RUN npm --prefix server run build
RUN npm --prefix server run install
RUN rm -rf ui
CMD npm --prefix server start

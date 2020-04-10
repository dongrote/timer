#!/bin/sh

npm --prefix ui i
npm --prefix server i
npm --prefix server run build
npm --prefix server run install
docker build . -t timer:latest

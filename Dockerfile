# syntax=docker/dockerfile:1

ARG CHROME_VERSION='107.0.5304.121-1'
ARG NODE_VERSION='18.14.0'

FROM cypress/factory

WORKDIR /home
COPY . /home
RUN npm install

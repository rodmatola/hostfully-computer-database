# syntax=docker/dockerfile:1

ARG CHROME_VERSION='120.0.6099.71'
ARG NODE_VERSION='20.10.0'

FROM cypress/factory

WORKDIR /home
COPY . /home
RUN npm install

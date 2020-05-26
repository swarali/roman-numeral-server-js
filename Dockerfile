# ---------- Base ----------
FROM node:12-alpine AS base

RUN apk --no-cache add curl

RUN mkdir /usr/node_app && chown node:node /usr/node_app

WORKDIR /usr/node_app

COPY package*.json yarn.lock ./

USER node

# ---------- Dev ----------
FROM base AS dev

# Install all dependencies, both production and development
RUN yarn install --no-optional && yarn cache clean --force

ENV PATH /usr/node_app/node_modules/.bin:$PATH

RUN mkdir /usr/node_app/app

WORKDIR /usr/node_app/app

# ---------- Release ----------
FROM base AS release

# Install the production dependencies
RUN yarn install --no-optional --only=production && yarn cache clean --force

ENV PATH /usr/node_app/node_modules/.bin:$PATH

RUN mkdir /usr/node_app/app

WORKDIR /usr/node_app/app

# Copy source code last since it changes the most
COPY . .

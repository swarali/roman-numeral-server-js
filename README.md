Roman Numeral Server in NodeJS
===
A simple NodeJS webapp that returns roman numeral value on query.

HTTP Server built using [ExpressJS](https://github.com/expressjs/express).
Roman numeral conversion as per Wikipedia page: [Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals).

[Yarn](https://github.com/yarnpkg/yarn) for building.

[Mocha](https://github.com/mochajs/mocha) + [Chai](https://github.com/chaijs/chai) for testing.

Prerequisites
==
* nodejs
* yarn

Run server in production
==
```bash
$ NODE_ENV=production # set NODE_ENV=production (in Windows)
$ yarn run start
```

Run server in development mode
==
Run server with nodemon to reload server on new changes to the source
```bash
$ yarn run dev
```

For client
```bash
$ curl -i "http://127.0.0.1:8080/romannumeral?query={integer}"
```

Test
==
```bash
$ yarn test
```

With Docker
==
Server in prod:
```bash
$ docker-compose -f docker-compose.prod.yml up
```
Server in dev:
```bash
$ docker-compose up
```
Tests:
```bash
$ docker-compose run dev-app yarn test
```

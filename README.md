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
$ yarn prod_win // yarn prod_nix
```

Run server in development mode
==
For server
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

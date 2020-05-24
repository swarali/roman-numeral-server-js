const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');

const app = require('../app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('RomanNumeral', () => {
  describe('GET', () => {
    // Test on home page
    it('should return home page', (done) => {
      chai.request(app)
        .get('/')
        .end(((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        }));
    });

    // Test existence of '/romannumeral' path
    it('should return on correct query', (done) => {
      chai.request(app)
        .get('/romannumeral?query=49')
        .end((((err, res) => {
          res.should.have.status(200);
          res.text.should.eq('XLIX');
        })));
      done();
    });

    // Test error on wrong path
    it('should return 404 error on invalid path', () => {
      chai.request(app)
        .get('/users')
        .end((((err, res) => {
          res.should.have.status(404);
        })));
    });
    // Test error on wrong query parameters
    it('should return 400 error on invalid query parameters', () => {
      chai.request(app)
        .get('/romannumeral')
        .end((((err, res) => {
          res.should.have.status(400);
        })));

      chai.request(app)
        .get('/romannumeral?query=abc')
        .end((((err, res) => {
          res.should.have.status(400);
        })));

      chai.request(app)
        .get('/romannumeral?query=12222222')
        .end((((err, res) => {
          res.should.have.status(400);
        })));
    });
  });
});

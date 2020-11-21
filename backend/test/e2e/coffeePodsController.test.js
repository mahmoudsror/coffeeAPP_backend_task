const chai =  require('chai');
const supertest = require('supertest');
const app = require('../../app');
const api = supertest(app);
chai.should();

describe('Coffee Pods Tests', () => {
 
    it("should return all coffee pods  ", (done) => {
        api.get('/coffeepods')
          .end((err, res) => {
            res.status.should.be.equal(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data')
            done();
          });
        });


    it("should return coffee pods according to query filters ", (done) => {
      api.get('/coffeepods')
      .query({coffee_flavor: "COFFEE_FLAVOR_CARAMEL"})
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data')
          done();
        });
      });
  });
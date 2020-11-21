const chai =  require('chai');
const supertest = require('supertest');
const app = require('../../app');
const api = supertest(app);
chai.should();

describe('Coffee Machines Tests', () => {
 
    it("should return all coffee machines  ", (done) => {
        api.get('/coffeemachines')
          .end((err, res) => {
            res.status.should.be.equal(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data')
            done();
          });
        });


    it("should return coffee machines according to query filters ", (done) => {
      api.get('/coffeemachines')
      .query({product_type: "COFFEE_MACHINE_LARGE"})
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data')
          done();
        });
      });
  });
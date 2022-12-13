const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

let should = chai.should();

chai.use(chaiHttp);
describe("The operations of a calculator", () => {
    describe('/addition operation', () => {
        it("should return the sum of two numbers", (done) => {
            const operands = {
                numOne: 2,
                numTwo: 3
            }
            chai.request(server)
                .post('/api/v1/calculator/add')
                .send(operands)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property("success").eq(true);
                    res.body.should.have.property("message").eq("Operation successfuly completed");
                    res.body.should.have.property("data").eq(5)
                    done();
                });
        });
    });

    describe('/subtraction operation', () => {
        it("should return the difference of two numbers", (done) => {
            const operands = {
                numOne: 2,
                numTwo: 3
            }
            chai.request(server)
                .post('/api/v1/calculator/subtract')
                .send(operands)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property("success").eq(true);
                    res.body.should.have.property("message").eq("Operation successfuly completed");
                    res.body.should.have.property("data").eq(-1)
                    done();
                });
        });
    });
    describe('/multiplication operation', () => {
        it("should return the product of two numbers", (done) => {
            const operands = {
                numOne: 2,
                numTwo: 3
            }
            chai.request(server)
                .post('/api/v1/calculator/multiply')
                .send(operands)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property("success").eq(true);
                    res.body.should.have.property("message").eq("Operation successfuly completed");
                    res.body.should.have.property("data").eq(6)
                    done();
                });
        });
    });
    describe('/division operation', () => {
        it("should return the quotient of two numbers", (done) => {
            const operands = {
                numOne: 2,
                numTwo: 3
            }
            chai.request(server)
                .post('/api/v1/calculator/divide')
                .send(operands)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property("success").eq(true);
                    res.body.should.have.property("message").eq("Operation successfuly completed");
                    res.body.should.have.property("data")
                    done();
                });
        });
    });
    describe('/power operation', () => {
        it("should return the power of two numbers", (done) => {
            const operands = {
                numOne: 2,
                numTwo: 3
            }
            chai.request(server)
                .post('/api/v1/calculator/power')
                .send(operands)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property("success").eq(true);
                    res.body.should.have.property("message").eq("Operation successfuly completed");
                    res.body.should.have.property("data")
                    done();
                });
        });
    });
    describe('/logarithm operation', () => {
        it("should return the power of two numbers", (done) => {
            const operands = {
                numOne: 2,
                numTwo: 3
            }
            chai.request(server)
                .post('/api/v1/calculator/logarithm')
                .send(operands)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property("success").eq(true);
                    res.body.should.have.property("message").eq("Operation successfuly completed");
                    res.body.should.have.property("data")
                    done();
                });
        });
    });
    describe('/natural logarithm operation', () => {
        it("should return the natural log of a numbers", (done) => {
            const operands = {
                numOne: 2
            }
            chai.request(server)
                .post('/api/v1/calculator/natural')
                .send(operands)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property("success").eq(true);
                    res.body.should.have.property("message").eq("Operation successfuly completed");
                    res.body.should.have.property("data")
                    done();
                });
        });
    });
})





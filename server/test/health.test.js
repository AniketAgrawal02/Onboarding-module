const chai = require("chai");
const chaiHttp = require("chai-http");
let should = chai.should();
chai.use(chaiHttp);

describe("API Testing Health Check", () => {
    describe("\ngetHealthCheck", () => {
        it("It should return empty request body", (done) => {
            chai.request("http://localhost:9127")
                .get("/ces/healthcheck")
                .end((err, res) => {
                    //console.log(res.body);
                    res.should.have.status(200);
                    done();
                });
        });
    });
});

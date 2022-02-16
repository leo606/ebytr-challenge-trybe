const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
const { MongoClient } = require("mongodb");

const server = require("../api/app");
const { getConnection } = require("./mocks/connectionMock");

const { expect } = chai;

chai.use(chaiHttp);

describe("post login", () => {
  let connectionMock;
  before(async () => {
    connectionMock = await getConnection;
    sinon.stub(MongoClient, "connect").resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe("when user is not informed", () => {
    let response;
    before(async () => {
      response = await chai.request(server).post("/login").send({});
    });

    it("returns status code 400", () => {
      expect(response).to.have.status(400);
    });

    it("returns error message property", () => {
      expect(response.body).to.have.property("message");
    });

    it("error message have text: user is required ", () => {
      expect(response.body).to.have.property("message", "user is required");
    });
  });
});

const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
const { MongoClient } = require("mongodb");

const server = require("../api/app");
const { getConnection } = require("./mocks/connectionMock");

const { expect } = chai;

const usersMock = require("./mocks/userMock.json");
const tasksMock = require("./mocks/tasksMock.json");

chai.use(chaiHttp);

describe("put task status", () => {
  let connectionMock;
  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, "connect").resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe("when status is not informed", () => {
    let response;
    before(async () => {
      const usersCollection = await connectionMock
        .db("ebytr-tasks")
        .collection("users");
      const taskCollection = await connectionMock
        .db("ebytr-tasks")
        .collection("tasks");

      await usersCollection.insertMany(usersMock);
      await taskCollection.insertMany(tasksMock);

      response = await chai.request(server).put("/task/1").send({});
    });

    it("returns status code 400", () => {
      expect(response).to.have.status(400);
    });

    it("returns error message property", () => {
      expect(response.body).to.have.property("message");
    });

    it("error message have text: status is required ", () => {
      expect(response.body).to.have.property("message", "status is required");
    });
  });
});

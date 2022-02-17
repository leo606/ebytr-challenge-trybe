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

describe("delete task", () => {
  let connectionMock;
  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, "connect").resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe("delete /task/:id with wrong id", () => {
    let response;
    before(async () => {
      response = await chai.request(server).delete(`/task/wrongID`);
    });
    after(async () => {});

    it("returns status code 400", async () => {
      expect(response).to.have.status(400);
    });

    it("returns message: invalid task ID", async () => {
      expect(response.body).to.have.property("message", "invalid task ID");
    });
  });

  describe("delete /task/:id", () => {
    let response;
    let taskCollection;
    before(async () => {
      taskCollection = await connectionMock
        .db("ebytr-tasks")
        .collection("tasks");

      await taskCollection.insertMany(tasksMock);
      const taskInDb = await taskCollection.findOne();

      response = await chai.request(server).delete(`/task/${taskInDb._id}`);
    });
    after(async () => {
      await taskCollection.drop();
    });

    it("returns status code 200", async () => {
      expect(response).to.have.status(200);
    });
  });
});

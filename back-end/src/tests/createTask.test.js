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

describe("post task", () => {
  let connectionMock;
  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, "connect").resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe("when task is not informed", () => {
    let response;
    before(async () => {
      response = await chai.request(server).post("/task").send({});
    });

    it("returns status code 400", () => {
      expect(response).to.have.status(400);
    });

    it("returns error message property", () => {
      expect(response.body).to.have.property("message");
    });

    it("error message have text: task and user is required ", () => {
      expect(response.body).to.have.property("message", "task and user is required");
    });
  });

  describe("when task is informed return 200 ok", () => {
    let response;
    let taskCollection;

    before(async () => {
      taskCollection = await connectionMock
        .db("ebytr-tasks")
        .collection("tasks");

      response = await chai
        .request(server)
        .post(`/task`)
        .send({ task: "new task", user: "abc" });
    });

    after(async () => {
      await usersCollection.drop();
      await taskCollection.drop();
    });

    it("return status 200 ok", () => {
      expect(response).to.have.status(200);
    });

    it("return new task id", () => {
      expect(response.body).to.have.property("id");
    });

    it("task is saved in DB", async () => {
      const newTask = taskCollection.findOne({ _id: response.body.id });
      expect(newTask).to.have.property("task", "new task");
    });
  });
});

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

describe("post login", () => {
  let connectionMock;
  before(async () => {
    connectionMock = await getConnection();
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

  describe("when user is correct", () => {
    let response;
    let taskCollection;
    let usersCollection;
    before(async () => {
      usersCollection = await connectionMock
        .db("ebytr-tasks")
        .collection("users");
      taskCollection = await connectionMock
        .db("ebytr-tasks")
        .collection("tasks");

      await usersCollection.insertMany(usersMock);
      await taskCollection.insertMany(tasksMock);

      response = await chai
        .request(server)
        .post("/login")
        .send({ user: "abc" });
    });
    after(async () => {
      await taskCollection.drop();
      await usersCollection.drop();
    });

    it("returns status code 200", () => {
      expect(response).to.have.status(200);
    });

    it("returns user object with correct values", () => {
      const user0Tasks = tasksMock
        .filter((task) => task.user === usersMock[0].user)
        .map(({ _id, ...task }) => ({ id: _id, ...task }));

      expect(response.body).to.have.property("user", usersMock[0].user);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("tasks");
    });
  });

  describe("when is new user", () => {
    let response;
    let usersCollection;
    before(async () => {
      usersCollection = await connectionMock
        .db("ebytr-tasks")
        .collection("users");

      await usersCollection.insertMany(usersMock);

      response = await chai
        .request(server)
        .post("/login")
        .send({ user: "thisisanewuser" });
    });
    after(async () => {
      await usersCollection.drop();
    });

    it("returns status code 200", () => {
      expect(response).to.have.status(200);
    });

    it("returns user object with correct values", () => {
      expect(response.body).to.have.property("user", "thisisanewuser");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("tasks");
    });
  });
});

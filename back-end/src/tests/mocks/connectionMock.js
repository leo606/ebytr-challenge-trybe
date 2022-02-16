const { MongoClient } = require("mongodb");
const { MongoMemoryServer } = require("mongodb-memory-server");

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function getConnection() {
  const memoryServer = await MongoMemoryServer.create();
  const uri = memoryServer.getUri();

  return MongoClient.connect(uri, OPTIONS);
}

module.exports = {
  getConnection,
};

const { MongoClient } = require("mongodb");

const DB_URL = `mongodb://${process.env.HOST || "localhost"}:27017/ebytr-tasks`;
const DB_NAME = "ebytr-tasks";
const DB_OPTS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let conn = null;

module.exports = async () => {
  if (conn) return conn;
  MongoClient.connect(DB_URL, DB_OPTS).then((connection) => {
    conn = connection.db(DB_NAME);
    return conn;
  });
};

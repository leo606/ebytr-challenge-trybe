const connection = require("../connection");

module.exports = async (task) => {
  try {
    const db = await connection();
    const created = await db.collection("tasks").insertOne(task);
    return created;
  } catch (e) {
    console.log(e);
  }
};

const connection = require("../connection");

module.exports = async (user) => {
  try {
    const db = await connection();
    const tasks = await db.collection("tasks").find({ user }).toArray();
    return tasks;
  } catch (e) {
    console.log(e);
  }
};

const connection = require("../connection");

module.exports = async (user) => {
  try {
    const db = await connection();
    const tasks = await db
      .collection("tasks")
      .find({ user })
      .project({ id: "$_id", _id: 0, user: 1, task: 1, date: 1, status: 1 })
      .toArray();
    return tasks;
  } catch (e) {
    console.log(e);
  }
};

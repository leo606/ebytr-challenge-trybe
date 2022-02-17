const connection = require("../connection");
const { ObjectId } = require("mongodb");

module.exports = async (id) => {
  try {
    const db = await connection();

    const deleted = await db
      .collection("tasks")
      .deleteOne({ _id: new ObjectId(id) });

    return deleted;
  } catch (e) {
    console.log(e);
  }
};

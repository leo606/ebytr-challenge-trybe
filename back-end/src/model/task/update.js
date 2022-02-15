const connection = require("../connection");
const { ObjectId } = require("mongodb");

module.exports = async (id, update) => {
  try {
    const db = await connection();

    const updated = await db
      .collection("tasks")
      .updateOne({ _id: new ObjectId(id) }, { $set: { ...update } });

    return updated;
  } catch (e) {
    console.log(e);
  }
};

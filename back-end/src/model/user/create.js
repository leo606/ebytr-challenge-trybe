const connection = require("../connection");

module.exports = async (user) => {
  try {
    const db = await connection();
    const create = await db.collection("users").insertOne({ user });
    return create;
  } catch (e) {
    console.log("user model create");
    console.log(e);
  }
};

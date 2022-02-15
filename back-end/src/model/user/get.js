const connection = require("../connection");

module.exports = async (user) => {
  try {
    const db = await connection();
    const userInDb = await db.collection("users").findOne({ user });
    return userInDb;
  } catch (e) {
    console.log(e);
  }
};

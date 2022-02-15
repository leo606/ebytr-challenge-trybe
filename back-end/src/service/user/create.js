const model = require("../../model/user");

module.exports = async ({ user }) => {
  try {
    const created = await model.create({ user });
    return {user, id: created.insertedId};
  } catch (e) {
    console.log(e);
  }
};

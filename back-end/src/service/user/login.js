const userModel = require("../../model/user");
const taskModel = require("../../model/task");

module.exports = async ({ user }) => {
  try {
    const userInDb = await userModel.get(user);
    if (userInDb) {
      const tasks = await taskModel.listByUser(user);
      return { user: userInDb.user, id: userInDb._id, tasks };
    }

    const newUser = await userModel.create(user);
    return { user, id: newUser.insertedId, tasks: [] };
  } catch (e) {
    console.log(e);
  }
};

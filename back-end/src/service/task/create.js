const taskModel = require("../../model/task");

module.exports = async (task, user) => {
  try {
    const newTask = await taskModel.insert({ task, user, status: "pendente" });
    return newTask;
  } catch (e) {
    return {
      err: { code: "internalServerError", message: "something went wrong" },
    };
  }
};

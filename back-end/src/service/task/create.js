const taskModel = require("../../model/task");

module.exports = async (task, user) => {
  try {
    const status = "pendente";
    const newTask = await taskModel.insert({ task, user, status });
    return { id: newTask.insertedId, task, user, status };
  } catch (e) {
    return {
      err: { code: "internalServerError", message: "something went wrong" },
    };
  }
};

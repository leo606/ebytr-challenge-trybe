const taskModel = require("../../model/task");

module.exports = async (task, user) => {
  try {
    const status = "pendente";
    const date = new Date(Date.now);
    const newTask = await taskModel.insert({ task, user, status, date });
    return { id: newTask.insertedId, task, user, status, date };
  } catch (e) {
    return {
      err: { code: "internalServerError", message: "something went wrong" },
    };
  }
};

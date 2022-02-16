const taskService = require("../../service/task");
const statusCodes = require("../../helpers/statusCodes.json");

module.exports = async (req, res, next) => {
  const { task, user } = req.body;
  if (!task || !user) {
    return next({ code: "badRequest", message: "task and user is required" });
  }

  try {
    const newTask = await taskService.create(task, user);

    if (newTask.err) {
      return next(newTask.err);
    }

    res.status(statusCodes.ok).json(newTask);
  } catch (e) {
    console.log();
  }
};

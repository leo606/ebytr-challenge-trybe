const taskService = require("../../service/task");
const statusCodes = require("../../helpers/statusCodes.json");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const removed = await taskService.remove(id);
    if (removed.err) {
      return next(removed.err);
    }
    res.status(statusCodes.ok).end();
  } catch (e) {
    console.log(e);
    return next({ code: "internalServerError", message: "something went wrong" })
  }
};

const taskService = require("../../service/task");
const statusCodes = require("../../helpers/statusCodes.json");

module.exports = async (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;
  if (!status) {
    return next({ code: "badRequest", message: "status is required" });
  }

  try {
    const updated = await taskService.update(id, status);
    if (updated.err) {
      return next(updated.err);
    }
    res.status(statusCodes.ok).end();
  } catch (e) {
    console.log(e);
  }
};

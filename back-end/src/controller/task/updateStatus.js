const taskService = require("../../service/task");
const statusCodes = require("../../helpers/statusCodes.json");

module.exports = async (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    const updated = await taskService.update(id, status);
    res.status(statusCodes.ok).json(updated);
  } catch (e) {
    console.log(e);
  }
};

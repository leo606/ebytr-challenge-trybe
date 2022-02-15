const taskModel = require("../../model/task");

module.exports = async (id, status) => {
  try {
    const updated = await taskModel.update(id, { status });
    return updated;
  } catch (e) {
    console.log(e);
  }
};

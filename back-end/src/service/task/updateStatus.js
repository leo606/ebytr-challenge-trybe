const taskModel = require("../../model/task");

module.exports = async (id, status) => {
  try {
    const updated = await taskModel.update(id, { status });
    if (updated.acknowledged) {
      return updated.acknowledged;
    }
  } catch (e) {
    console.log(e);
    return {
      err: { code: "internalServerError", message: "something went wrong" },
    };
  }
};

const taskModel = require("../../model/task");

const err = {
  err: { code: "internalServerError", message: "something went wrong" },
};

module.exports = async (id, status) => {
  try {
    const updated = await taskModel.update(id, { status });
    if (updated.acknowledged) {
      return updated.acknowledged;
    }
    return err;
  } catch (e) {
    console.log(e);
    return err;
  }
};

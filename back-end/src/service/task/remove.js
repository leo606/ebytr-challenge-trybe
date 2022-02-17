const taskModel = require("../../model/task");

const err = {
  err: { code: "internalServerError", message: "something went wrong" },
};

module.exports = async (id) => {
  try {
    const removed = await taskModel.remove(id);
    if (removed.acknowledged) {
      return removed.acknowledged;
    }
    return err
  } catch (e) {
    console.log(e);
    return err;
  }
};

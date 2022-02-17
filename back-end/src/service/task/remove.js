const taskModel = require("../../model/task");
const { ObjectId } = require("mongodb");

const err = {
  err: { code: "internalServerError", message: "something went wrong" },
};

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    return { err: { code: "badRequest", message: "invalid task ID" } };
  }
  try {
    const removed = await taskModel.remove(id);
    if (removed.acknowledged) {
      return removed.acknowledged;
    }
    return err;
  } catch (e) {
    console.log(e);
    return err;
  }
};

const statusCodes = require("../../helpers/statusCodes.json");

module.exports = async (req, res, next) => {
  try {
    res.status(statusCodes.notImplemented).end();
  } catch (e) {
    console.log(e);
  }
};

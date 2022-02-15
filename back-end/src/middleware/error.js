const statusCodes = require("../helpers/statusCodes.json");

module.exports = (err, _req, res, _next) => {
  res.status(statusCodes[err.code]).json({ message: err.message });
};

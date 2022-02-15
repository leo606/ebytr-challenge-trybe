const statusCodes = require("../helpers/statusCodes.json");

module.exports = (err, _req, res, _next) => {
  res.status(statusCodes[err.status]).json({ message: err.message });
};

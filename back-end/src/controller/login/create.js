const service = require("../../service/user");
const statusCodes = require("../../helpers/statusCodes.json");

module.exports = async (req, res, next) => {
  const { user } = req.body;
  try {
    const userData = await service.login({ user });
    res.status(statusCodes.ok).json(userData);
  } catch (e) {
    console.log(e);
  }
};

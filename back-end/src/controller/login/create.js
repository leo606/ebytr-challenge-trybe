const service = require("../../service/user");
const statusCodes = require("../../helpers/statusCodes.json");

module.exports = async (req, res, next) => {
  const { user } = req.body;
  if (!user) {
    return next({ status: "badRequest", message: "user is required" });
  }

  try {
    const userData = await service.login({ user });
    res.status(statusCodes.ok).json(userData);
  } catch (e) {
    console.log(e);
  }
};

const service = require("../../service/user");
const statusCodes = require("../../helpers/statusCodes.json");

module.exports = async (req, res, next) => {
  const { user } = req.body;
  try {
    const newUser = await service.create({ user });
    res.status(statusCodes.ok).json(newUser);
  } catch (e) {
    console.log(e);
  }
};

const { createHttpException } = require("../../helpers");
const { UserModel } = require("../../models");

require("dotenv").config();

const verifiEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const userInstance = await UserModel.findOne({ verificationToken });
  if (!userInstance) {
    throw createHttpException(404, "user is not found");
  }

  await UserModel.findByIdAndUpdate(userInstance._id, {
    isEmailVeryfied: true,
    verificationToken: null,
  });

  res.status(204).json({message: "Email is verification"})
};

module.exports = { verifiEmail };

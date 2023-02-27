// const { createHttpException } = require("../../helpers");
const { UserModel } = require("../../models");
const { createAccessToken } = require("../../services/jwt");
const bcrypt = require("bcrypt");
const gravatar = require('gravatar')

const signUp = async (req, res, next) => {
  const { firstname, email, password } = req.body;

  const avatarURL = gravatar.url(email);


  const passwordHash = await bcrypt.hash(password, 10);


  const userInstance = await UserModel.create({
    firstname,
    email,
    passwordHash,
    avatarURL,
  })
  


  const accessToken = createAccessToken({ userId: userInstance._id });

  res.status(201).json({ accessToken });
};

module.exports = { signUp };

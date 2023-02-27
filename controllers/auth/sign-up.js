// const { createHttpException } = require("../../helpers");
const { UserModel } = require("../../models");
const { createAccessToken } = require("../../services/jwt");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const crypto = require("crypto");
const { sendEmailVerificationLetter } = require("../../services/email");
const { createHttpException } = require("../../helpers");

const signUp = async (req, res, next) => {
  const conflictMessage ="User already exist"
  const { firstname, email, password } = req.body;

  const userInstance = await UserModel.findOne({email})
  if(userInstance){
    throw createHttpException(409, conflictMessage)
  }

  const avatarURL = gravatar.url(email);
  const passwordHash = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomUUID();
  const sessionKey = crypto.randomUUID();

  const newUserInstance = await UserModel.create({
    firstname,
    email,
    passwordHash,
    avatarURL,
    verificationToken,
    sessionKey,
  })

  await UserModel.findOneAndUpdate(
    { email },
    { sessionKey },
    { runValidators: true }
  );

  await sendEmailVerificationLetter(email, verificationToken);

  const accessToken = createAccessToken({
    userId: newUserInstance._id,
    sessionKey,
  });

  res.json({ accessToken });
};

module.exports = { signUp };

const jimp = require("jimp");
const path = require("path");
const fsp = require("fs/promises");
const { UserModel } = require("../../models");

const avatar = async (req, res, next) => {
  const { __id } = req.user;
  jimp
    .read(req.file.path)
    .then((image) => {
      return image.resize(250, 250).write(req.file.path);
    })
    .then(() => next())
    .catch((err) => next(err));

  const avatarPath = path.join(
    __dirname,
    "../../public/avatars",
    req.file.filename
  );

  fsp.rename(req.file.path, avatarPath);

  const filePath = path.join("avatars", req.file.filename);
  await UserModel.findByIdAndUpdate(__id, { avatarURL: filePath });
  res.json({
    avatarURL: filePath,
  });
};

module.exports = { avatar };

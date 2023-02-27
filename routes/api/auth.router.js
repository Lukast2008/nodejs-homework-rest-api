const express = require("express");
const multer = require("multer");
const path = require("path");
const authController = require("../../controllers/auth");
const { controllerExceptionWrapper } = require("../../helpers");
const { userSignUpSchema, userSignInSchema } = require("../../helpers/schemas");
const { authUser } = require("../../middlewares");
const { validateBody } = require("../../middlewares/validate-body.middleware");

const router = express.Router();

const multerConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    const filePath = path.join(__dirname, "../../temp");
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const filenames = file.originalname;
    cb(null, filenames);
  },
});

const upload = multer({ storage: multerConfig });

router

  .patch(
    "/avatars",
    authUser,
    upload.single("avatar"),
    controllerExceptionWrapper(authController.avatar)
  )
  .post(
    "/sign-up",
    validateBody(userSignUpSchema),
    controllerExceptionWrapper(authController.signUp)
  )
  .post(
    "/sign-in",
    validateBody(userSignInSchema),
    controllerExceptionWrapper(authController.signIn)
  )
  .post("/logout", authUser, controllerExceptionWrapper(authController.logout))
  
  .get(
    "/email/verify/:verificationToken",
    controllerExceptionWrapper(authController.verifiEmail)
  );

module.exports = router;

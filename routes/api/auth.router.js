const express = require("express");
const authController = require("../../controllers/auth");
const { controllerExceptionWrapper } = require("../../helpers");
const { userSignUpSchema, userSignInSchema } = require("../../helpers/schemas");
const { authUser } = require("../../middlewares");
const { validateBody } = require("../../middlewares/validate-body.middleware");

const router = express.Router();

router
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
  .post(
    "/logout",
    authUser,
    controllerExceptionWrapper(authController.logout)
  );

module.exports = router;

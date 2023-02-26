const Joi = require("Joi");

const userSignUpSchema = Joi.object({
  firstname: Joi.string().min(1).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
  subscription: Joi.string().required(),
  avatarURL:  Joi.string(),
});


module.exports ={userSignUpSchema}

const { signUp } = require("./sign-up");
const { signIn } = require("./sign-in");
const { logout } = require("./logout");
const { avatar } = require("./avatar");
const {verifiEmail }= require("./verificationToken");

module.exports = { signUp, signIn, logout, avatar ,verifiEmail};

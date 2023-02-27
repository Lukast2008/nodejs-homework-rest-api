const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      index: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Set password for user"],
      trim: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    sessionKey: {
      type: String,
      default: null,
      trim: true,
    },
    avatarURL: String,
    isEmailVeryfied: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

usersSchema.index({ email: 1 });

const UserModel = mongoose.model("users", usersSchema);

module.exports = { UserModel };

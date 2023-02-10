const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9 -]{10,20}$/
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  });

const ContactModel = mongoose.model("contacts", contactSchema)

module.exports = {ContactModel}

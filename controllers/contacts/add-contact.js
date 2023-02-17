const { ContactModel } = require("../../models");

const addContact = async (req, res, next) => {
  const { _id } = req.user;
  const { name, email, phone, favorite } = req.body;
  const result = await ContactModel.create({
    name,
    email,
    phone,
    favorite,
    owner: _id,
  });
  res.json(result);
};

module.exports = { addContact };

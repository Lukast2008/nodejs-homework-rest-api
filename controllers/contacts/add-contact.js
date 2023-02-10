const { ContactModel } = require("../../models");

const addContact = async (req, res, next) => {
  
  const { name, email, phone, favorite } = req.body;
  const result = await ContactModel.create({ name, email, phone, favorite });
  res.json(result);
};

module.exports = { addContact };

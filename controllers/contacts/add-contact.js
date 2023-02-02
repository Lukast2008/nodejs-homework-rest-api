const { createHttpException } = require("../../helpers");
const { addContactSchema } = require("../../helpers/schemas");
const contactsRepository = require("../../models/contacts");

const addContact = async (req, res, next) => {
  try {
    const { error } = addContactSchema.validate(req.body);
    if (error) {
      throw createHttpException(400, error.message);
    }
    const { name, email, phone } = req.body;
    const result = await contactsRepository.addContact({ name, email, phone });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { addContact };

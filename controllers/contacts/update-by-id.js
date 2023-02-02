const { createHttpException } = require("../../helpers");
const { addContactSchema } = require("../../helpers/schemas");
const contactsRepository = require("../../models/contacts");

const updateById = async (req, res, next) => {
    try {
      const { contactId } = req.params;
  
      const { name, email, phone } = req.body;
  
      const { error } = addContactSchema.validate({ name, email, phone });
      if (error) {
        throw createHttpException(400, error.message);
      }
      const result = await contactsRepository.updateContact(contactId, {
        name,
        email,
        phone,
      });
  
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  module.exports = {updateById}
// const contactsRepository = require("../../models/contacts");
const { ContactModel } = require("../../models");
const { createHttpException } = require("../../helpers");

const getByID = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await ContactModel.findById(contactId)
      if(!result){
        throw createHttpException(404, 'The contact is not found')
      };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getByID };

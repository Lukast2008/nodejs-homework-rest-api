const contactsRepository = require("../../models/contacts");

const getByID = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsRepository.getContactById(contactId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getByID };

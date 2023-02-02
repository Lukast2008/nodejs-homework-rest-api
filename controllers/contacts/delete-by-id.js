const contactsRepository = require("../../models/contacts");

const deleteById = async (req, res, next) => {
    try {
      const { contactId } = req.params;
      await contactsRepository.removeContact(contactId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

module.exports ={deleteById}
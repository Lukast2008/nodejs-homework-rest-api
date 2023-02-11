const { ContactModel } = require("../../models");

const updateById = async (req, res, next) => {
      const { contactId } = req.params;
      const { name, email, phone , favorite } = req.body;
      const result = await ContactModel.findByIdAndUpdate(contactId, {
        name,
        email,
        phone,
        favorite,
      });
  
      res.json(result)
  }

  module.exports = {updateById}
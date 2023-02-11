const { ContactModel } = require("../../models");
const { createHttpException } = require("../../helpers");

const getByID = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await ContactModel.findById(contactId)
      if(!result){
        throw createHttpException(404, 'The contact is not found')
      };
    res.json(result);
};

module.exports = { getByID };

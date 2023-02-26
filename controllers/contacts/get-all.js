const { ContactModel } = require("../../models");

const getAll = async (req, res, next) => {
  console.log(req)
  const result = await ContactModel.find({});
  console.log(result)
  res.json(result);
};

module.exports = { getAll };

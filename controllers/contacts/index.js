const { addContact } = require("./add-contact");
const { getAll } = require("./get-all");
const { getByID } = require("./get-by-id");
const { deleteById } = require("./delete-by-id");
const { updateById } = require("./update-by-id");

module.exports = { getAll, getByID, addContact, updateById, deleteById };

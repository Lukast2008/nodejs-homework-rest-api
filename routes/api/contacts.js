const express = require("express");

const contactsController = require("../../controllers/contacts");

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:contactId", contactsController.getByID);

router.post("/", contactsController.addContact);

router.delete("/:contactId", contactsController.deleteById);

router.put("/:contactId", contactsController.updateById);

module.exports = router;

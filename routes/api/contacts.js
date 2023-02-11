const express = require("express");
const contactsController = require("../../controllers/contacts");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { addContactSchema } = require("../../helpers/schemas");

const router = express.Router();

router
  .get("/", controllerExceptionWrapper(contactsController.getAll))
  .get("/:contactId", controllerExceptionWrapper(contactsController.getByID))
  .post(
    "/",
    validateBody(addContactSchema),
    controllerExceptionWrapper(contactsController.addContact)
  )
  .put(
    "/:contactId",
    validateBody(addContactSchema),
    contactsController.updateById
  )
  .delete("/:contactId", contactsController.deleteById);
module.exports = router;

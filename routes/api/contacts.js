const express = require("express");
const contactsController = require("../../controllers/contacts");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody, authUser } = require("../../middlewares");
const { addContactSchema } = require("../../helpers/schemas");

const router = express.Router();

router
  .get("/", authUser, controllerExceptionWrapper(contactsController.getAll))
  .get(
    "/:contactId",
    authUser,
    controllerExceptionWrapper(contactsController.getByID)
  )
  .post(
    "/",
    authUser,
    validateBody(addContactSchema),
    controllerExceptionWrapper(contactsController.addContact)
  )
  .put(
    "/:contactId",
    authUser,
    validateBody(addContactSchema),
    contactsController.updateById
  )
  .delete("/:contactId", authUser, contactsController.deleteById);
module.exports = router;

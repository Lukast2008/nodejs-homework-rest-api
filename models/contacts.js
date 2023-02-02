const fsp = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const { createHttpException } = require("../helpers");

const contactsPath = path.join(__dirname, "contacts.JSON");

const updateContacts = async (contacts) =>
  await fsp.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const contacts = await fsp.readFile(contactsPath);
  const result = JSON.parse(contacts);
  return result;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    throw createHttpException(404, "the contact is not found")
  }
  return contact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    throw createHttpException(404, "the contact is not found")
  }
  contacts.splice(index, 1);
  await updateContacts(contacts);
  return contacts[index];
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);

  await updateContacts(contacts);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();

  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    // throw new Error("The book is not found");
    throw createHttpException(404, "the contact is not found")
  }

  contacts[index] = { id: contactId, ...body };
  await updateContacts(contacts);
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};

const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");
const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};
const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const searchedContact = contacts.find((contact) => contact.id === contactId);
  if (!searchedContact) {
    return null;
  }

  return searchedContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  const updatedContacts = contacts.filter((_, index) => index !== idx);
  await updateContacts(updatedContacts);

  return contacts[idx];
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { name, email, phone, id: uuidv4() };
  contacts.push(newContact);
  await updateContacts(contacts);

  return newContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };

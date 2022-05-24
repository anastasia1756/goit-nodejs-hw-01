const contactsOperations = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;

    case "get":
      const searchedContact = await contactsOperations.getContactById(id);
      console.log("searchedContact", searchedContact);
      break;

    case "add":
      const newContacts = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.table(newContacts);
      break;
    case "remove":
      const updatedContacts = await contactsOperations.removeContact(id);
      console.table(updatedContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

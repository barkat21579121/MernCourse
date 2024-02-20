const Contact = require("../models/contactSchema");

const getAllContacts = async (req, res) => {
  try {
    const response = await Contact.find();
    if (!Contact) {
      res.status(400).send({ message: "no contact found " });
    }
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};
module.exports = getAllContacts;

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
const deleteUserData = async (req, res, next) => {
  const id = req.params.id;
  await Contact.deleteOne({ _id: id });
  try {
    res.status(200).json({ message: "user Deleted SucessFully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllContacts, deleteUserData };

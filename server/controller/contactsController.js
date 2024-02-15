const contact = require("../models/contactSchema");

const contactControlller = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    res.status(200).json({ msg: "data sent sucessFully" });

    const response = await contact.create({
      name,
      email,
      message,
    });
    console.log(response);
  } catch (error) {
    res.status(400).json({
      message: "connection error ",
    });
  }
};
module.exports = contactControlller;

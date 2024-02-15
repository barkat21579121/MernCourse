const express = require("express");
const contactControlller = require("../controller/contactsController");
const ContactRoute = express.Router();

ContactRoute.route("/Contact").post(contactControlller);

module.exports = ContactRoute;

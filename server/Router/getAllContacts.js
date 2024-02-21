const express = require("express");
const getAllContacts = require("../controller/getAllContactsController");
const UserAuthMiddleWare = require("../middleware-Validator/AuthMiddleWare");

const router = express.Router();

router.get("/contacts", UserAuthMiddleWare, getAllContacts);

module.exports = router;

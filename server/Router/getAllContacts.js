const express = require("express");
const getAllContacts = require("../controller/getAllContactsController");
const UserAuthMiddleWare = require("../middleware-Validator/AuthMiddleWare");

const router = express.Router();

router.get("/contacs", UserAuthMiddleWare, getAllContacts);

module.exports = router;

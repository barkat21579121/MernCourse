const express = require("express");
const getAllContacts = require("../controller/getAllContactsController");

const router = express.Router();

router.get("/contacs", getAllContacts);

module.exports = router;

const express = require("express");
const {
  getAllContacts,
  deleteUserData,
} = require("../controller/getAllContactsController");
const UserAuthMiddleWare = require("../middleware-Validator/AuthMiddleWare");

const router = express.Router();

router.get("/contacts", UserAuthMiddleWare, getAllContacts);
router.delete("/contact/:id", UserAuthMiddleWare, deleteUserData);

module.exports = router;

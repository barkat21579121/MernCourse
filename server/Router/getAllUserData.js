const express = require("express");
const getAllUserData = require("../controller/getAllUserDatacontroller");
const UserAuthMiddleWare = require("../middleware-Validator/AuthMiddleWare");

const router = express.Router();

router.get("/users", UserAuthMiddleWare, getAllUserData);

module.exports = router;

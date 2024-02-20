const express = require("express");
const getAllUserData = require("../controller/getAllUserDatacontroller");

const router = express.Router();

router.get("/users", getAllUserData);

module.exports = router;

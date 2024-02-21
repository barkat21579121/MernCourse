const express = require("express");
const {
  getAllUserData,
  getSingleUserData,
  UpdateUserData,
} = require("../controller/getAllUserDatacontroller");
const UserAuthMiddleWare = require("../middleware-Validator/AuthMiddleWare");
const { deleteUser } = require("../controller");

const router = express.Router();

router.get("/users", UserAuthMiddleWare, getAllUserData);
router.get("/users/:id", UserAuthMiddleWare, getSingleUserData);

router.delete("/users/delete/:id", UserAuthMiddleWare, deleteUser);
router.patch("/users/update/:id", UserAuthMiddleWare, UpdateUserData);

module.exports = router;

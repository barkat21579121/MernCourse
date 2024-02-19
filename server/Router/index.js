const express = require("express");
const { Home, register, LoginUser, User } = require("../controller");
const validate = require("../middleware-Validator/middleware");
const schemaValidator = require("../validator/validator");
const UserAuthMiddleWare = require("../middleware-Validator/AuthMiddleWare");

const Router = express.Router();

Router.get("/", Home);
Router.get("/register", register);
Router.post("/register", validate(schemaValidator), register);
Router.post("/login", LoginUser);
Router.get("/user", UserAuthMiddleWare, User);

module.exports = Router;

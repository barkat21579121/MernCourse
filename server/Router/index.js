const express = require("express");
const { Home, register, LoginUser } = require("../controller");
const validate = require("../middleware-Validator/middleware");
const schemaValidator = require("../validator/validator");

const Router = express.Router();

Router.get("/", Home);
Router.get("/register", register);
Router.post("/register", validate(schemaValidator), register);
Router.post("/login", LoginUser);

module.exports = Router;

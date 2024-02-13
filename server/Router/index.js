const express = require("express");
const { Home, register } = require("../controller");

const Router = express.Router();

Router.get("/", Home);
Router.get("/register", register);
Router.post("/register", register);

module.exports = Router;

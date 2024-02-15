const express = require("express");
const { Home, register, LoginUser } = require("../controller");

const Router = express.Router();

Router.get("/", Home);
Router.get("/register", register);
Router.post("/register", register);
Router.post("/login", LoginUser);

module.exports = Router;

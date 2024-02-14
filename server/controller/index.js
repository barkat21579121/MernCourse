const Users = require("../models/UserMOdel");

const Home = (req, res) => {
  res.send("we are on home page ");
};
const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  const emailExists = await Users.findOne({ email });
  if (emailExists) {
    return res.status(400).send("user already exist ");
  }
  await Users.create({ name, email, phone, password });
  res.send({ message: req.body });
};

module.exports = { Home, register };

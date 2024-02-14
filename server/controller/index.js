const Users = require("../models/UserMOdel");
const bcrypt = require("bcrypt");

const Home = (req, res) => {
  res.send("we are on home page ");
};
const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  console.log(" requested data", req.body);
  const emailExists = await Users.findOne({ email });
  if (emailExists) {
    return res.status(400).send("user already exist ");
  }
  const SaltRound = 10;
  const hashed_password = await bcrypt.hash(password, SaltRound);

  await Users.create({ name, email, phone, password: hashed_password });
  res.send({ message: req.body });
};

module.exports = { Home, register };

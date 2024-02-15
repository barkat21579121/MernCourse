const Users = require("../models/UserMOdel");
const bcrypt = require("bcrypt");

//*___________________
//* created first controller for route
//*___________________
const Home = (req, res) => {
  res.send("we are on home page ");
};
//*___________________
//* Logic for registration
//*___________________
const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  console.log(" requested data", req.body);
  const emailExists = await Users.findOne({ email });
  if (emailExists) {
    return res.status(400).send("user already exist ");
  }
  //*___________________
  //* hashed password
  //*___________________
  const SaltRound = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, SaltRound);
  //*___________________
  //* Equall hashed password with userPassword
  //*___________________
  const userCreated = await Users.create({
    name,
    email,
    phone,
    password: hashed_password,
  });
  //*___________________
  //* JWT generateToken function imported from schema directly
  //*___________________
  res.send({
    message: "registration SuccessFull",
    token: await userCreated.generateToken(),
    userID: userCreated._id.toString(),
  });
};

module.exports = { Home, register };

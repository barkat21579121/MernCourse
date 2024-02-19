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
    return res.status(400).send({ message: "user already exist " });
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
//*___________________
//* Logic for Login
//*___________________

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  ///checking email is valid or not
  const userExist = await Users.findOne({ email });

  if (!userExist) {
    res.status(400).send("invalid credencials");
  }
  const user = await bcrypt.compare(password, userExist.password);
  console.log(user);

  if (user) {
    res.status(200).json({
      message: "login sucessFully",
      token: await userExist.generateToken(),
      userID: userExist._id.toString(),
    });
  } else {
    res.status(401).json("invalid email/password");
  }
};
const User = async (req, res) => {
  try {
    const UserData = await req.user;

    res.status(200).json({ msg: UserData });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { Home, register, LoginUser, User };

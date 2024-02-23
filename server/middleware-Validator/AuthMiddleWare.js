const JWT = require("jsonwebtoken");
const Users = require("../models/UserMOdel");

const UserAuthMiddleWare = async (req, res, next) => {
  const token = await req.header("Authorization");
  if (!token) {
    res.status(400).json({ message: "invalid token" });
  }
  const jsonwebtoken = token.replace("Bearer", "").trim();
  try {
    const IsVerified = JWT.verify(jsonwebtoken, process.env.JWT_KEY);
    const UserData = await Users.findOne({ email: IsVerified.email }).select({
      password: 0,
    });
    req.user = UserData;
    req.token = token;
    req.userId = IsVerified._id;
    next();
  } catch (error) {}
};

module.exports = UserAuthMiddleWare;

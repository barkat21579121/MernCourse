const Users = require("../models/UserMOdel");

const getAllUserData = async (req, res) => {
  try {
    const response = await Users.find({}, { password: 0 });
    if (!response) {
      res.status(404).json({ message: "no user created yet" });
    }
    return res.status(200).json(response);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = getAllUserData;

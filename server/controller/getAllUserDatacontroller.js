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
const getSingleUserData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Users.findOne({ _id: id }, { password: 0 });
    res.status(200).json(data);
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = { getAllUserData, getSingleUserData };

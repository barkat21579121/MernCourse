const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/Mern_Stack";

const DbConnection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("DB connected ");
  } catch (error) {
    console.log(error);
  }
};
module.exports = DbConnection;

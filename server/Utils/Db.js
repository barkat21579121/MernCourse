const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

// const URL = process.env.DB_URL;

console.log(URL);

const DbConnection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    });
    console.log("DB connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = DbConnection;

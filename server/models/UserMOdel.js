const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
//*___________________
//* JWT generateToken function
//*___________________

userSchema.methods.generateToken = function () {
  return JWT.sign(
    {
      userID: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "30d",
    }
  );
};

const Users = new mongoose.model("User", userSchema);

module.exports = Users;

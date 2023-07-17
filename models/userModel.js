const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide us your Email"],

    lowercase: true,
  },

  msg: {
    type: String,
    required: [true, "Please provide us your message"],

    lowercase: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

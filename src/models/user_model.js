const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: { type: String, require: true },
    password: { type: String, require: true, unique: true },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("User", userSchema);

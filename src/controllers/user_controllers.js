const User = require("../models/user_model");
const asyncHandler = require("express-async-handler");

// add user
const addUser = asyncHandler(async (req, res) => {
  const userBody = req.body;
  if (req.body.username && req.body.email && req.body.password) {
    const user = new User(userBody);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } else {
    res.status(400).send("Invalid user data");
  }
});

// delete user

const deleteUser = asyncHandler(async (req, res) => {
  let user_from_body = req.body;
  const user = await User.findByID(user_from_body._id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  if (user_from_body.password == user.password) {
    await user.delete();
  }
});

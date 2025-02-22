const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.find({ email : email});
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error('User Already Exits');
  }
  
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
});

module.exports = { createUser, loginUserCtrl };
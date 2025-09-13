const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const generateToken = require('../config/jwtToken');
const crypto = require('crypto');
const sendEmail = require('../utils/index')

const createUser = asyncHandler(async (req, res) => {
  const { email, password, name, mobile } = req.body;

  const findUser = await User.findOne({ email });

  if (findUser) throw new Error('User Already Exists');

  const newUser = await User.create({
    name,
    email,
    mobile,
    password,
  });

    // Generate dynamic verification link
  const verifyLink = `http://localhost:3000/verify/${newUser._id}`;

  // Send verification email to the new user
  await sendEmail(
    newUser.email, // dynamic user email
    "Verify your E-Shop account",
    `Hello ${newUser.name},\n\nPlease click the link below to verify your account:\n\n${verifyLink}`
  );

  res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    token: generateToken(newUser._id),
  });
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired verification token' });
  }

  user.isVerified = true;
  user.verificationToken = null;
  await user.save();

  res.status(200).json({ message: 'Email verified successfully' });
})

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });

  if (!findUser.isVerified) {
  return res.status(401).json({ message: "Please verify your email first" });
}

 if (findUser && await findUser.isPasswordMatched(password)) {
    res.status(200).json({
      _id: findUser._id,
      name: findUser.name,
      email: findUser.email,
      token: generateToken(findUser._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

module.exports = { createUser, loginUserCtrl, verifyEmail };
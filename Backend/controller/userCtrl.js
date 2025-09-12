const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const generateToken = require('../config/jwtToken');

const createUser = asyncHandler(async (req, res) => {
  const { email, password, name, mobile } = req.body;

  const findUser = await User.findOne({ email });
  if (findUser) {
    throw new Error('User Already Exists');
  }

  // Encriptar contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    mobile,
    password: hashedPassword,
    
  });

  res.json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    token: generateToken(newUser._id),
  }).status(201);
  
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });

  if (!findUser) {
    res.status(401).json({ message: 'Invalid email or password' });
    return;
  }

  // Comparar contraseñas
  const isPasswordMatched = await bcrypt.compare(password, findUser.password);
  if (isPasswordMatched) {
    res.json({
      _id: findUser._id,
      name: findUser.name,
      email: findUser.email,
      token: generateToken(findUser._id),
    }).status(200);
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

module.exports = { createUser, loginUserCtrl };
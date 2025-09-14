const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../config/jwtToken');
const crypto = require('crypto');
const sendEmail = require('../utils/index');

// Create new user and send verification email
const createUser = asyncHandler(async (req, res) => {
  const { email, password, firstname, lastname, mobile } = req.body;

  // Check if user already exists
  const findUser = await User.findOne({ email });
  if (findUser) throw new Error('User Already Exists');

  // Generate verification token
  const verificationToken = crypto.randomBytes(32).toString("hex");

  // Create new user
  const newUser = await User.create({
    firstname,
    lastname,
    email: email.toLowerCase(),
    mobile,
    password,
    verificationToken,
    isVerified: false
  });

  // Generate dynamic verification link
  const verifyLink = `http://localhost:4000/api/user/verify/${verificationToken}`;

  // Send verification email
  await sendEmail(
    newUser.email,
    "Verify your E-Shop account",
    `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #2c3e50;">Hola ${newUser.firstname} ${newUser.lastname},</h2>
      <p>Gracias por registrarte en <strong>CCTech Solutions</strong>.</p>
      <p>Haz clic en el siguiente botón para verificar tu cuenta:</p>
      <a href="${verifyLink}" style="display: inline-block; padding: 10px 20px; background-color: #3498db; color: white; text-decoration: none; border-radius: 5px;">Verificar Email</a>
      <p style="margin-top: 20px;">Si no solicitaste esta cuenta, puedes ignorar este mensaje.</p>
    </div>
    `
  );

  res.status(201).json({
    _id: newUser._id,
    firstname: newUser.firstname,
    email: newUser.email,
    token: generateToken(newUser._id),
  });
});

// Verify user email
const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.redirect('http://localhost:3000/verify-failed'); 
  }

  user.isVerified = true;
  user.verificationToken = null;
  await user.save();

  // Redirect to your frontend success page
  res.redirect('http://localhost:3000/verify-success');
});



// Login user
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email: email.toLowerCase() });

  if (!findUser) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  if (!findUser.isVerified) {
    return res.status(401).json({ message: "Please verify your email first" });
  }

  if (await findUser.isPasswordMatched(password)) {
    res.status(200).json({
      _id: findUser._id,
      name: findUser.firstname,
      email: findUser.email,
      token: generateToken(findUser._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password/Password is incorrect' });
  }
});

const logoutCtrl = asyncHandler(async (req, res) => {
 // Clear the JWT token from the client-side
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successful' });
});

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const forgotPasswordCtrl = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString("hex");
  user.passwordResetToken = resetToken;
  user.passwordResetExpires = Date.now() + 3600000; // 1 hour
  await user.save();

  // create a reset link
  const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

  // send email 
  await sendEmail(
    user.email,
    "Reset your E-Shop password",
    `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #2c3e50;">Hello ${user.firstname} ${user.lastname},</h2>
      <p>Thank you for using <strong>CCTech Solutions</strong>.</p>
      <p>Click the link below to reset your password. This link will expire in 1 hour:</p>
      <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #3498db; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
      <p style="margin-top: 20px;">If you did not request a password reset, please ignore this email.</p>
    </div>
    `
  );

  res.status(200).json({ message: 'Password reset email sent' });
})


const resetPasswordCtrl = asyncHandler(async (req, res) => {
  const {token} = req.params;
  const {password} = req.body;

  const user = await User.findOne({
    passwordResetToken: token,
    passwordResetExpires: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  user.password = password;
  user.passwordResetToken = null;
  user.passwordResetExpires = null;
  await user.save();

  res.status(200).json({ message: 'Password reset successful' });
})

module.exports = { createUser, loginUserCtrl, verifyEmail, logoutCtrl, getUser, forgotPasswordCtrl, resetPasswordCtrl };

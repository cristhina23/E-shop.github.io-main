const e = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URI)
    console.log('DataBase conectada');
  }
  catch (error) {
    console.log('DataBase  error');
  }
};
module.exports = dbConnect;
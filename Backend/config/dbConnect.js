const mongoose = require('mongoose');

const dbConnect = () => {
  try {
    const conn = mongoose.connect('mongodb+srv://viszellechacon:e-shop123456789@cluster0.vf4nroq.mongodb.net/')
    console.log('DataBase conectada');
  }
  catch (error) {
    console.log('DataBase  error');
  }
};
module.exports = dbConnect;
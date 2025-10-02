const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ DataBase conectada en: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Error al conectar con la DB:', error.message);
    process.exit(1); // Detiene la app si falla la DB
  }
};

module.exports = dbConnect;

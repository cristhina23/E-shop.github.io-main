const express = require('express');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv').config();
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const authRouter = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Conexión DB
dbConnect();

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get("/", (req, res) => {
  res.send("✅ Backend running on Render");
});
app.use('/api/user', authRouter);

// Manejo de errores
app.use(notFound);
app.use(errorHandler);

// Server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

const express = require('express');
const { createUser, loginUserCtrl } = require('../controller/userCtrl');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { verifyEmail } = require('../controller/userCtrl');

router.post('/signup',  createUser);
router.post('/login',  loginUserCtrl);
//router.get("/verify/:token", verifyEmail);

module.exports = router;
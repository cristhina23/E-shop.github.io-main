const express = require('express');
const { createUser, loginUserCtrl, getUser, logoutCtrl, forgotPasswordCtrl, resetPasswordCtrl } = require('../controller/userCtrl');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { verifyEmail } = require('../controller/userCtrl');

router.post('/signup',  createUser);
router.post('/login',  loginUserCtrl);
router.get("/verify/:token", verifyEmail);

// passord reset
router.post('/forgot-password', forgotPasswordCtrl);
router.post('/reset-password/:token', resetPasswordCtrl);




module.exports = router;
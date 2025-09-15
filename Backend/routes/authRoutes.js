const express = require('express');
const { createUser, loginUserCtrl, getUser, logoutCtrl, forgotPasswordCtrl, resetPasswordCtrl, updateUserProfile, getUserProfile } = require('../controller/userCtrl');
const router = express.Router();
const {authMiddleware} = require('../middlewares/authMiddleware');
const { verifyEmail } = require('../controller/userCtrl');

router.post('/signup',  createUser);
router.post('/login',  loginUserCtrl);
router.get("/verify/:token", verifyEmail);

// passord reset
router.post('/forgot-password', forgotPasswordCtrl);
router.post('/reset-password/:token', resetPasswordCtrl);

router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);
router.get('/logout', authMiddleware, logoutCtrl);





module.exports = router;
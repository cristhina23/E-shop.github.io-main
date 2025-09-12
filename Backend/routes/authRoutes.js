const express = require('express');
const { createUser, loginUserCtrl } = require('../controller/userCtrl');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/signup',  createUser);
router.post('/login', authMiddleware, loginUserCtrl);

module.exports = router;
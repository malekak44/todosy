const express = require('express');
const router = express.Router();
const {
    register,
    login,
    logout,
    resetPassword,
    forgotPassword,
} = require('../controllers/auth');
const authenticateUser = require('../middleware/auth');

router
    .route('/register')
    .post(register);

router
    .route('/login')
    .post(login);

router
    .route('/logout')
    .delete(authenticateUser, logout);

router
    .route('/forgot-password')
    .post(forgotPassword);

router
    .route('/reset-password')
    .post(resetPassword);

module.exports = router;
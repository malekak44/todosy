const express = require('express');
const router = express.Router();
const {
    register,
    login,
    logout,
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

module.exports = router;
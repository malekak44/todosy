const express = require('express');
const router = express.Router();
const {
    register,
    login,
    logout,
    getUser,
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
    .route('/showMe')
    .get(authenticateUser, getUser);

module.exports = router;
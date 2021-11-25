const express = require('express');
const router = express.Router();

const {
    updateUser,
    uploadImage,
} = require('../controllers/user');
const authenticateUser = require('../middleware/auth')

router
    .route('/update')
    .patch(authenticateUser, updateUser);

router
    .route('/upload')
    .post(authenticateUser, uploadImage);

module.exports = router;
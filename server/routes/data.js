const express = require('express');
const router = express.Router();

const {
    getQuote,
} = require('../controllers/data');

router
    .route('/quote')
    .get(getQuote);

module.exports = router;
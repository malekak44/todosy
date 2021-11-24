const express = require('express');
const router = express.Router();

const getQuote = require('../controllers/quote');

router
    .route('/')
    .get(getQuote);

module.exports = router;
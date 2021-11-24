const Quote = require('../models/Quote');
const { StatusCodes } = require('http-status-codes');

const getQuote = async (req, res) => {
    const quotes = await Quote.find({});
    const random = Math.floor(Math.random() * quotes.length);
    const singleQuote = quotes[random];

    res.status(StatusCodes.OK).json({ quote: singleQuote.quote });
}

module.exports = getQuote;
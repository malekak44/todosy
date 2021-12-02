const {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
} = require('./jwt');
const sendEmail = require('./sendEmail');
const authorizeToken = require('./authorizeToken');
const createTokenUser = require('./createTokenUser');

module.exports = {
    sendEmail,
    createJWT,
    isTokenValid,
    authorizeToken,
    createTokenUser,
    attachCookiesToResponse,
}
const {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
} = require('./jwt');
const sendEmail = require('./sendEmail');
const filterUser = require('./filterUser');
const authorizeToken = require('./authorizeToken');
const createTokenUser = require('./createTokenUser');

module.exports = {
    sendEmail,
    createJWT,
    filterUser,
    isTokenValid,
    authorizeToken,
    createTokenUser,
    attachCookiesToResponse,
}
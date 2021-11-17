const {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
} = require('./jwt');
const authorizeToken = require('./authorizeToken');
const createTokenUser = require('./createTokenUser');

module.exports = {
    createJWT,
    isTokenValid,
    authorizeToken,
    createTokenUser,
    attachCookiesToResponse,
}
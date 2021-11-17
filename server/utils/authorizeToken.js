const crypto = require('crypto');
const Errors = require('../errors');
const Token = require('../models/Token');
const createTokenUser = require('./createTokenUser');
const { attachCookiesToResponse } = require('./jwt');

const authorizeToken = async (req, res, user) => {
    const tokenUser = createTokenUser(user);

    let refreshToken = '';
    const existingToken = await Token.findOne({ user: user._id });

    if (existingToken) {
        const { isValid } = existingToken;
        if (!isValid) {
            throw new Errors.UnauthenticatedError('Invalid Credentials');
        }

        refreshToken = existingToken.refreshToken;
        attachCookiesToResponse({ res, user: tokenUser, refreshToken });
        return;
    }

    refreshToken = crypto.randomBytes(40).toString('hex');
    const userAgent = req.headers['user-agent'];
    const ip = req.ip;
    const userToken = { refreshToken, ip, userAgent, user: user._id };

    await Token.create(userToken);
    attachCookiesToResponse({ res, user: tokenUser, refreshToken });
}

module.exports = authorizeToken;
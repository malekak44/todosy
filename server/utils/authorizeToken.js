const crypto = require('crypto');
const Errors = require('../errors');
const Token = require('../models/Token');
const { attachCookiesToResponse } = require('./jwt');

const authorizeToken = async (req, res, user) => {
    let refreshToken = '';
    const existingToken = await Token.findOne({ user: user.userId });

    if (existingToken) {
        const { isValid } = existingToken;
        if (!isValid) {
            throw new Errors.UnauthenticatedError('Invalid Credentials');
        }

        refreshToken = existingToken.refreshToken;
        attachCookiesToResponse({ res, user, refreshToken });
        return;
    }

    refreshToken = crypto.randomBytes(40).toString('hex');
    const userAgent = req.headers['user-agent'];
    const ip = req.ip;
    const userToken = { refreshToken, ip, userAgent, user: user.userId };

    await Token.create(userToken);
    attachCookiesToResponse({ res, user, refreshToken });
}

module.exports = authorizeToken;
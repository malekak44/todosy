const {
    isTokenValid,
    attachCookiesToResponse,
} = require('../utils');
const Errors = require('../errors');
const Token = require('../models/Token');

const authenticateUser = async (req, res, next) => {
    const { accessToken, refreshToken } = req.signedCookies;

    try {
        if (accessToken && refreshToken) {
            const payload = isTokenValid(accessToken);
            req.user = payload;
            return next();
        }

        const payload = isTokenValid(refreshToken);

        const existingToken = await Token.findOne({
            user: payload.user.userId,
            refreshToken: payload.refreshToken
        });

        if (!existingToken || !existingToken?.isValid) {
            throw new CustomError.UnauthenticatedError('Authentication Invalid');
        }

        attachCookiesToResponse({
            res,
            user: payload.user,
            refreshToken: existingToken.refreshToken
        });

        req.user = payload.user;
        next();
    } catch (error) {
        throw new Errors.UnauthenticatedError('Authentication Invalid');
    }
}

module.exports = authenticateUser;
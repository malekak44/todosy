const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    });
    return token;
}

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, user, refreshToken }) => {
    const accessTokenJWT = createJWT({ payload: user });
    const refreshTokenJWT = createJWT({ payload: { user, refreshToken } });

    const oneDay = 1000 * 60 * 60 * 24;
    const oneMonth = 1000 * 60 * 60 * 24 * 30;

    res.cookie('accessToken', accessTokenJWT, {
        httpOnly: true,
        sameSite: 'none',
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production',
        signed: true,
    });

    res.cookie('refreshToken',refreshTokenJWT,{
        httpOnly: true,
        sameSite: 'none',
        expires: new Date(Date.now() + oneMonth),
        secure: process.env.NODE_ENV === 'production',
        signed: true,
    });
}

module.exports = {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
}
const {
    sendEmail,
    createTokenUser,
    authorizeToken
} = require('../utils');
const crypto = require('crypto');
const Errors = require('../errors');
const User = require('../models/User');
const origin = 'http://localhost:3000';
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
        throw new Errors.BadRequestError('Email already exists');
    }

    const user = await User.create({ name, email, password });
    const tokenUser = createTokenUser(user);
    await authorizeToken(req, res, tokenUser);

    res.status(StatusCodes.CREATED).json({ user: tokenUser });
}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new Errors.BadRequestError('Please provide email and password.');
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Errors.UnauthenticatedError('User does not exist');
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new Errors.UnauthenticatedError('Password is not correct');
    }

    const tokenUser = createTokenUser(user);
    await authorizeToken(req, res, tokenUser);

    res.status(StatusCodes.CREATED).json({ user: tokenUser });
}

const logout = async (req, res) => {
    const cookies = ['accessToken', 'refreshToken'];
    cookies.forEach(cookie => res.clearCookie(cookie));

    res
        .status(StatusCodes.OK)
        .json({ msg: 'user logged out' });
}

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        throw new Errors.BadRequestError('Please provide valid email');
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Errors.UnauthenticatedError('User does not exist');
    }

    const passwordToken = crypto.randomBytes(30).toString('hex');
    sendEmail({
        name: user.name,
        email: user.email,
        passwordToken: passwordToken,
        origin,
    });

    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes).toISOString();

    user.passwordToken = passwordToken;
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;
    await user.save();

    res.status(StatusCodes.OK).json({ msg: 'Please check your inbox' });
}

const resetPassword = async (req, res) => {
    const { email, password, passwordToken } = req.body;
    if (!email, !password, !passwordToken) {
        throw new Errors.BadRequestError('Please provide all values');
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Errors.UnauthenticatedError('User does not exist');
    }

    const currentDate = new Date().toISOString();

    if (user.passwordToken === passwordToken && user.passwordTokenExpirationDate > currentDate) {
        user.password = password;
        user.passwordToken = null;
        user.passwordTokenExpirationDate = null;
        await user.save();
    }

    res.status(StatusCodes.OK).json({ msg: 'Password reseted successfully' });
}

module.exports = {
    register,
    login,
    logout,
    resetPassword,
    forgotPassword,
}
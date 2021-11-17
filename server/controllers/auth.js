const Errors = require('../errors');
const User = require('../models/User');
const { authorizeToken } = require('../utils');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
        throw new Errors.BadRequestError('Email already exists');
    }

    const user = await User.create({ name, email, password });
    await authorizeToken(req, res, user);

    res.status(StatusCodes.CREATED).json(user);
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

    await authorizeToken(req, res, user);

    res
        .status(StatusCodes.CREATED)
        .json({ msg: 'user logged in successfully', user });
}

const logout = async (req, res) => {
    res
        .clearCookie('accessToken')
        .clearCookie('refreshToken')
        .status(StatusCodes.OK)
        .json({ msg: 'user logged out' });
}

const getUser = async (req, res) => {
    const userId = req.user.userId;

    const user = await User.findOne({ _id: userId });

    res.status(StatusCodes.OK).json(user);
}

module.exports = {
    register,
    login,
    logout,
    getUser,
}
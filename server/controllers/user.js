const Errors = require('../errors');
const User = require('../models/User');
const { filterUser } = require('../utils');
const cloudinary = require('cloudinary').v2;
const { StatusCodes } = require('http-status-codes');

const getUser = async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findOne({ _id: userId });
    const filteredUser = filterUser(userId, user);

    res.status(StatusCodes.OK).json({ user: filteredUser });
}

const updateUser = async (req, res) => {
    const userId = req.user.userId;

    const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
        new: true,
        runValidators: true,
    });

    if (!user) {
        throw new Errors.NotFoundError(`No user found with id: ${userId}`);
    }

    res.status(StatusCodes.OK).json({ user: user });
}

const uploadImage = async (req, res) => {
    const file = req.files.image;

    await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        if (err) {
            throw new Errors.BadRequestError(err);
        }
        res.status(StatusCodes.OK).json(result);
    });

    await file.mv('./uploads/' + file.name, (err, result) => {
        if (err) {
            throw new Errors.BadRequestError(err);
        }
    });
}

module.exports = {
    getUser,
    updateUser,
    uploadImage,
}
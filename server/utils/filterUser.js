const filterUser = (userId, user) => {
    return {
        _id: userId,
        name: user.name,
        email: user.email,
        image: user.image,
        location: user.location
    }
}

module.exports = filterUser;
const User = require('./userModel')

module.exports.findAllUsers = async () => {
    return await User.find({})
}

module.exports.createNewUser = async (userObj) => {
    const user = new User({
        email: userObj.email,
        password: userObj.password,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
    })

    try {
        const newuser = await user.save()
        return newuser
    } catch {
        throw 'error creating new user'
    }
}

module.exports.createNewGoogleUser = async (profile) => {
    const user = new User({
        firstName: profile._json.given_name,
        lastName: profile._json.family_name,
        email: profile._json.email,
        google: {
            id: profile.id,
            firstName: profile._json.given_name,
            lastName: profile._json.family_name,
            email: profile._json.email,
        },
    })

    try {
        const newuser = await user.save()
        return newuser
    } catch {
        throw 'error creating new user'
    }
}

module.exports.findUserByEmail = async (email) => {
    return await User.findOne({ email })
}

module.exports.findUserById = async (id) => {
    return await User.findById(id)
}

module.exports.findOne = async (options) => {
    return await User.findOne(options)
}

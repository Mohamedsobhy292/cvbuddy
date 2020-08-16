const User = require('./userModel')

exports.findAllUsers = async () => {
    return await User.find({})
}

exports.createNewUser = async (userObj) => {
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

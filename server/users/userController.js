const User = require('./userModel')
const UserRepo = require('./userRepo')
const userService = require('./userService')

exports.getUsers = async (req, res) => {
    try {
        const users = await UserRepo.findAllUsers()
        res.json(users)
    } catch (e) {
        console.log(e)
    }
}

exports.createUser = async (req, res) => {
    const user = {
        ...req.body,
    }

    const userValidationErrors = await userService.validateUser(user)
    console.log('userValidationErrors ===========>', userValidationErrors)

    if (userValidationErrors) {
        return res.status(403).send({
            error: 403,
            message: userValidationErrors.details[0].message,
        })
    }

    user.password = await userService.cryptPassword(req.body.password)

    try {
        const createNewUser = await UserRepo.createNewUser(user)
        return res.json(createNewUser)
    } catch (e) {
        return res.status(403).send({
            error: 403,
            message: 'check your credintials',
        })
    }
}

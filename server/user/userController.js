const UserRepo = require('./userRepo')
const userService = require('./userService')

const frontEndUrl = 'http://localhost:3000'

module.exports.getUsers = async (req, res) => {
    try {
        const users = await UserRepo.findAllUsers()
        res.json({
            data: users,
        })
    } catch (e) {
        res.status(500).json({
            message: e,
        })
    }
}

module.exports.getSingleUser = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const user = await UserRepo.findUserById(id)
        res.json({
            data: user,
        })
    } catch (e) {
        res.status(500).json({
            message: e,
        })
    }
}

module.exports.createUser = async (req, res) => {
    const user = {
        ...req.body,
    }

    const userValidationErrors = await userService.validateUser(user)

    if (userValidationErrors) {
        res.status(500).json({
            message: userValidationErrors.details[0].message,
        })
    }

    user.password = await userService.cryptPassword(req.body.password)

    try {
        const createNewUser = await UserRepo.createNewUser(user)
        return res.json(createNewUser)
    } catch (e) {
        res.status(500).json({
            message: 'check your credinitials',
        })
    }
}

module.exports.redirectWithToken = async (req, res) => {
    const accessToken = await userService.generateAccessToken(req.user.id)
    return res.redirect(`${frontEndUrl}/?token=${accessToken}`)
}

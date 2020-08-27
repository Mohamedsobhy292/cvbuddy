const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const userRepo = require('./userRepo')
const { userSchema } = require('./userSchema')

const saltRounds = 10

module.exports.cryptPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

module.exports.validateUser = async (user) => {
    const isExistingUser = await userRepo.findUserByEmail(user.email)

    if (isExistingUser) {
        return {
            details: [
                {
                    message: 'user with email already exists',
                },
            ],
        }
    }

    const { error } = userSchema.validate(user)
    return error
}

// Generate an Access Token for the given User ID
module.exports.generateAccessToken = async (userId) => {
    const issuer = process.env.TOKEN_ISS
    const secret = process.env.TOKEN_SECRET

    const token = jwt.sign({}, secret, {
        expiresIn: Date.now() + 7 * 1000 * 60 * 60 * 24, // ADD ONE WEEK
        issuer: issuer,
        subject: userId.toString(),
    })

    return token
}

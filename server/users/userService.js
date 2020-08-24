const bcrypt = require('bcrypt')
const Joi = require('joi')
const userRepo = require('./userRepo')

const saltRounds = 10

const schema = Joi.object().keys({
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    email: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(6).max(30).required(),
})

exports.cryptPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

exports.validateUser = async (user) => {
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

    const { error } = schema.validate(user)
    return error
}

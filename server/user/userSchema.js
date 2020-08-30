const Joi = require('joi')

const userSchema = Joi.object().keys({
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    email: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(6).max(30).required(),
})

module.exports = userSchema

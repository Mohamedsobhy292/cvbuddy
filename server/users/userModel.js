const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            index: true,
            unique: true,
        },
        google: {
            id: String,
            email: String,
            firstName: String,
            lastName: String,
        },
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
)

module.exports = mongoose.model('User', userSchema)

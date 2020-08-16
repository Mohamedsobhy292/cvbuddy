const bcrypt = require('bcrypt')
const saltRounds = 10

exports.cryptPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

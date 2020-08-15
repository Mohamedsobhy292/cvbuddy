const User = require('./userModel')

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        console.log(e)
        console.log('hamosha')
    }
}

const userController = {
    getUsers,
}

module.exports = userController

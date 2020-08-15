const User = require('./userModel')

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        console.log(users)
        res.json(users)
    } catch (e) {
        console.log(e)
        console.log('hamooksha')
    }
}

exports.createUser = async (req, res) => {
    console.log(req.body)
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    try {
        const newuser = await user.save()
        res.json(newuser)
    } catch (e) {
        res.json(e)
    }
}

const userController = require('../users/userController')
const express = require('express')
const router = express.Router()

router.get('/', userController.getUsers)

// router.get('/:id', (req, res) => {})

// router.post('/', async (req, res) => {
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//     })

//     try {
//         const newUser = await user.save()
//         res.status(201).json(newUser)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

// router.patch('/:id', (req, res) => {})

module.exports = router

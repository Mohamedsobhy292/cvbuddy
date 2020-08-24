const userController = require('./userController')
const express = require('express')
const router = express.Router()
const passport = require('passport')

const frontEndUrl = 'http://localhost:3000'

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.get(
    '/login/google',
    passport.authenticate('google', {
        session: false,
        scope: ['profile', 'email'],
    })
)
router.get(
    '/login/google/callback',
    passport.authenticate('google', {
        session: false,
        failureRedirect: '/login',
    }),
    (req, res) => {
        console.log('req user infio', req.authInfo)
        res.redirect(`${frontEndUrl}?token=${req.authInfo.accessToken}`)
    }
)

module.exports = router

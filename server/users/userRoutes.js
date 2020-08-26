const userController = require('./userController')
const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    userController.getUsers
)
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
    userController.redirectWithToken
)

module.exports = router

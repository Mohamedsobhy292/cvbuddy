const userController = require('./userController')
const express = require('express')
const router = express.Router()
const passport = require('passport')
const authenticationMiddleware = require('../config/authenticationMiddleware')

router.get('/', authenticationMiddleware, userController.getUsers)
router.get('/:id', authenticationMiddleware, userController.getSingleUser)
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

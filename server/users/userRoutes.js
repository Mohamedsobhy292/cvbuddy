const userController = require('./userController')
const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

const frontEndUrl = 'http://localhost:3000'

// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
    const expiresIn = '1 hour'
    const issuer = process.env.TOKEN_ISS
    const secret = process.env.TOKEN_SECRET

    const token = jwt.sign({}, secret, {
        expiresIn: expiresIn,
        issuer: issuer,
        subject: userId.toString(),
    })

    return token
}

async function generateUserToken(req, res) {
    console.log('user id', req.user.id)
    const accessToken = await generateAccessToken(req.user.id)
    console.log(accessToken, 'accessToken from user id')
    res.json({
        token: accessToken,
    })
}

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
    generateUserToken
)

module.exports = router

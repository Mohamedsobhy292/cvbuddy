const passport = require('passport')

const protectedRoute = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, function (err, user) {
        if (err) {
            return next(err)
        }
        if (!user) {
            return res.status(401).send({
                error: 401,
                message: 'unauthorized',
            })
        }
        req.user = user
        next()
    })(req, res, next)
}

module.exports = protectedRoute

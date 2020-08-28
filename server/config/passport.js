const passport = require('passport')
const passportJwt = require('passport-jwt')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const UserRepo = require('../user/userRepo')

const jwtOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.passport.secret,
    issuer: config.passport.TOKEN_ISS,
}

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    UserRepo.findUserById(id)
        .then((user) => {
            done(null, user)
        })
        .catch((e) => {
            done(new Error(e))
        })
})

// JWT STRATEGY

passport.use(
    new passportJwt.Strategy(jwtOptions, async (payload, done) => {
        const user = await UserRepo.findUserById(payload.sub)
        if (user) {
            return done(null, user, payload)
        }
        return done()
    })
)

// GOOGLE STRATEGY

passport.use(
    new GoogleStrategy(
        {
            clientID: config.google.clientId,
            clientSecret: config.google.secret,
            callbackURL: '/users/login/google/callback',
        },
        async function (accessToken, refreshToken, profile, cb) {
            //check if user already exists in our db with the given profile ID
            const currentUser = await UserRepo.findOne({
                $or: [
                    { 'google.id': profile.id },
                    { email: profile._json.email },
                ],
            })

            if (currentUser) {
                //if we already have a record with the given profile ID
                return cb(null, currentUser, {
                    accessToken,
                })
            }
            //if not, create a new user
            UserRepo.createNewGoogleUser(profile).then((newUser) => {
                return cb(null, newUser, {
                    accessToken,
                })
            })
        }
    )
)

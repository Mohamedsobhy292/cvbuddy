const passport = require('passport')
const passportJwt = require('passport-jwt')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SESSION_SECRET } = process.env

const UserRepo = require('../users/userRepo')

const jwtOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET,
    issuer: process.env.TOKEN_ISS,
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
            done(new Error('Failed to deserialize an user'))
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
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
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

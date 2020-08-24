const passport = require('passport')
const passportJwt = require('passport-jwt')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SESSION_SECRET } = process.env

const User = require('../users/userModel')

const jwtOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET,
    issuer: process.env.TOKEN_ISS,
}

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user)
        })
        .catch((e) => {
            done(new Error('Failed to deserialize an user'))
        })
})

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

// JWT STRATEGY

passport.use(
    new passportJwt.Strategy(jwtOptions, (payload, done) => {
        const user = users.getUserById(parseInt(payload.sub))
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
            console.log(accessToken)

            //check if user already exists in our db with the given profile ID
            const currentUser = await User.findOne({
                $or: [
                    { 'google.id': profile.id },
                    { email: profile._json.email },
                ],
            })

            if (currentUser) {
                console.log('already user ===========================')
                console.log('accessToken', accessToken)
                //if we already have a record with the given profile ID
                return cb(null, currentUser, {
                    accessToken,
                })
            }
            //if not, create a new user
            new User({
                firstName: profile._json.given_name,
                lastName: profile._json.family_name,
                email: profile._json.email,
                google: {
                    id: profile.id,
                    firstName: profile._json.given_name,
                    lastName: profile._json.family_name,
                    email: profile._json.email,
                },
            })
                .save()
                .then((newUser) => {
                    return cb(null, newUser, {
                        accessToken,
                    })
                })
        }
    )
)

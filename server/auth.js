const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

dotenv.config()

const router = express.Router();

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

router.get('/google',
    passport.authenticate('google', {
        scope: [
            'profile',
            'email'
        ]
    })
);

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:9778',
        failureRedirect: '/'
    })
);

module.exports = router;
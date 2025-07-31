const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

dotenv.config()

const router = express.Router();

// Configurar estrategia de Google
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// Guardar datos del usuario
passport.serializeUser((user, done) => {
    done(null, user);
});

// Recuperar datos del usuario
passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// Ruta para iniciar sesion con Google
router.get('/google',
    passport.authenticate('google', {
        scope: [
            'profile',
            'email'
        ]
    })
);

// Ruta de redireccion despues del login
router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:9778',
        failureRedirect: '/'
    })
);

module.exports = router;
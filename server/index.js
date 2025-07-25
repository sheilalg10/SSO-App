const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

dotenv.config();

const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}));

app.use(session({
    secret:'mysecret',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

app.get('/auth/google',
    passport.authenticate('google', {
        scope: [
            'profile',
            'email'
        ]
    })
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:5173',
        failureRedirect: '/login'
    })
);

app.get('/api/user', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user.displayName });
    } else {
        res.status(401).json({ user: null });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend corriendo en http://localhost:${PORT}`));
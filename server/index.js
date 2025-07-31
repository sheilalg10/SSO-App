const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const auth = require('./auth');
const dotenv = require('dotenv');

dotenv.config()

const app = express();

app.use(cors({
    origin:'http://localhost:9778',
    credentials: true
}));

app.use(express.json())

// Configuracion de las sesiones
app.use(session({
    secret:process.env.SESSION_SECRET || 'mysecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 //1 día
    }
}));

// Inicialización de passport
app.use(passport.initialize());
app.use(passport.session());

// Devuelve los datos del usuario
app.get('/api/user', (req, res) => {
    if (req.user) {
        res.json({ user: req.user.displayName });
    } else {
        res.status(401).json({ user: null });
    }
});

app.use('/auth', auth)

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend corriendo en http://localhost:${PORT}`));
const express = require('express');
const cors = require('cors');
const session = require('express-session');

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

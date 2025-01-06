const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { USERS } = require('./lib/routes');
const userRoutes = require('./routes/users');

// Initialize app
const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send("<h2>Welcome to Resto Server!</h2>");
});

app.use(USERS, userRoutes);

// Mongo COnnection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to db!"))
    .catch(err => console.log("DB connection error: ", err));


module.exports = app;
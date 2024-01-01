const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const hbs = require("express-handlebars");
var helpers = require('handlebars-helpers')();


// config for loading env variables
require('dotenv').config();



// Load app routes
const main = require('./routes/main');


// initialize app
const app = express();

// configure handlebars view engine
app.engine('hbs', hbs({extname: 'hbs', helpers: helpers}));
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'hbs');

// configure public routes for public assets
app.use(express.static('public'));


// Enable cors middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Set the app to make use of the routes
app.use('', main);




const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App has Started on port ${port}`);
});

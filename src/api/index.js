require('dotenv').config();
require('babel-register');

// This will require "app.js" file and immediately call its 'start' method, sending the port from .env
require('./app.js').start(process.env.PORT || 8081);
const dotenv = require('dotenv').config({ path: '/config/app.conf'});

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

const api_endpoint=process.env.api_endpoint;
const api_access_token=process.env.api_access_token;
app.set('api_access_token',api_access_token);
app.set('api_endpoint', api_endpoint);

app.use(express.json());
app.use(cookieParser());

// Require API routes
const main = require('./routes/main');

// // Import API Routes
app.use(main);

// Export the server middleware
module.exports = {
     path: '/server', handler: app }

// LIBRARY IMPORTS
const express = require('express');
const path = require('path');
const cors = require('cors');

// LOCAL IMPORTS
const router = require('./routes.js');

// CREATE EXPRESS SERVER INSTANCE
const app = express();
require('dotenv').config();

// USE MIDDLEWARE
app.use(express.json());
app.use(cors());

// SERVE UP STATIC FILES
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('', router);

const { SITE_HOST, PORT } = process.env;
app.listen(PORT);
console.log(`Server listening at http://${SITE_HOST}:${PORT}`);

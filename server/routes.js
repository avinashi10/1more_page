// LIBRARY IMPORTS
const express = require('express');

const router = express.Router();

// LOCAL IMPORTS
const controller = require('./controllers.js');

// ROUTES
router.get('/books', controller.get);

module.exports = router;

// LIBRARY IMPORTS
const express = require('express');

const router = express.Router();

// LOCAL IMPORTS
const controller = require('./controllers.js');

// ROUTES
router.get('/books/getGoogleBook/:id', controller.getGoogleBook);
router.get('/books', controller.getAll);
router.get('/books/:isbn', controller.getOne);
router.put('/books/:isbn', controller.update);

module.exports = router;

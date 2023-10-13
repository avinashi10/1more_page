// LIBRARY IMPORTS
// eslint-disable-next-line import/no-unresolved
const express = require('express');

const router = express.Router();

// LOCAL IMPORTS
const controller = require('./controllers.js');

// ROUTES
router.get('/books', controller.getAll);
router.get('/books/:isbn', controller.getOne);
router.put('/books/:isbn', controller.update);

module.exports = router;

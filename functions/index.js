// LIBRARY IMPORTS
const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const cors = require('cors');

// LOCAL IMPORTS
const router = require('./routes.js');

// Check if running in Firebase Emulator
const isEmulator = functions.config().env && functions.config().env.dev === 'true';
// console.log('isEmulator backend:', isEmulator);

// Conditionally set frontendURL based on the environment
const frontendURL = isEmulator
  ? 'http://localhost:5000'
  : 'https://one-more-page.web.app';

// CREATE EXPRESS SERVER INSTANCE
const app = express();

// CORS MIDDLEWARE SETUP WITH WHITELIST
const corsOptions = {
  // eslint-disable-next-line object-shorthand
  origin: function (origin, callback) {
    console.log('Origin:', origin);
    console.log('Frontend URL:', frontendURL);

    if (frontendURL === origin || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// USE MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));

// SERVE UP STATIC FILES
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('', router);

// Export Express app as a Cloud Function
exports.api = functions.https.onRequest(app);

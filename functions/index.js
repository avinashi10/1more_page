// LIBRARY IMPORTS
const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const cors = require("cors");

// LOCAL IMPORTS
const router = require("./routes.js");

const frontendURL = "https://one-more-page.web.app";

// CREATE EXPRESS SERVER INSTANCE
const app = express();

// CORS MIDDLEWARE SETUP WITH WHITELIST
const corsOptions = {
  origin: function (origin, callback) {
    if (frontendURL === origin || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// USE MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));

// SERVE UP STATIC FILES
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("", router);

// Export Express app as a Cloud Function
exports.api = functions.https.onRequest(app);

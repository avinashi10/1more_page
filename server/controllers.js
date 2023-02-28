// LIBRARY IMPORTS
const express = require('express');

// LOCAL IMPORTS
const model = require('./models.js');

module.exports = {
  get: (req, res) => {
    model.getAllFromDb((err, data) => {
      if (err) {
        res.send('Uh-oh, GET error: ' + err);
      } else {
        res.send(data);
      }
    });
  },
};

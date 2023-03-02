// LIBRARY IMPORTS
const express = require('express');

// LOCAL IMPORTS
const model = require('./models.js');

module.exports = {
  get: (req, res) => {
    model.getAllFromDb((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(data);
      }
    });
  },
};

// LIBRARY IMPORTS
const express = require('express');

// LOCAL IMPORTS
const model = require('./models.js');

module.exports = {
  get: (req, res) => {
    model.getAllFromDb()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.status(404).send(err));
  },
};

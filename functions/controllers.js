// LIBRARY IMPORTS
// eslint-disable-next-line no-unused-vars
const express = require('express');

// LOCAL IMPORTS
const model = require('./models.js');

module.exports = {
  getAll: (req, res) => {
    model.getAllFromDb()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.status(404).send(err));
  },
  getOne: (req, res) => {
    model.getOneFromDb(req.params)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.status(404).send(err));
  },
  update: (req, res) => {
    model.updateInDb(req.params.isbn, req.body.ageRange, req.body.raceRep, req.body.format)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.status(404).send(err));
  },
};

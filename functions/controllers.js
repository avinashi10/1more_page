// LIBRARY IMPORTS
// eslint-disable-next-line no-unused-vars
const express = require('express');
const axios = require('axios');
const functions = require('firebase-functions');

// LOCAL IMPORTS
const model = require('./models.js');

module.exports = {
  getAll: (req, res) => {
    model.getAllFromDb()
      .then((data) => {
        res.send(data);
        // const keyTrial = functions.config().api.token;
        // console.log('Key: ', keyTrial);
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
    model.updateInDb(req.params.id, req.body.ageRange, req.body.raceRep, req.body.format)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.status(404).send(err));
  },
  getGoogleBook: async (req, res) => {
    const googleBookId = req.params.id;
    try {
      const GOOGLE_API_KEY = functions.config().api.token;
      const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${googleBookId}?key=${GOOGLE_API_KEY}`);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to fetch book from Google Books.');
    }
  },
};

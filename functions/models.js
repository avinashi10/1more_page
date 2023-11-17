/* eslint-disable */
// LIBRARY IMPORTS
const express = require('express');
const mongoose = require('mongoose');

// LOCAL IMPORTS
const Book = require('./db.js');

module.exports = {
  // ETL PROCESS
  createInDb: (book, cb) => {
    Book.create(book)
      .then((response) => {
        cb(null, response);
      })
      .catch((err) => {
        cb(err);
      });
  },
  clearDb: () => {
    Book.deleteMany({})
      .then(() => console.log('DB cleared!'))
      .catch((err) => console.log('Error clearing db: ', err));
  },

  // CLIENT REQUESTS
  getAllFromDb: () => {
    return Book.find({});
  },

  getOneFromDb: ({ isbn }) => {
    return Book.find({ isbn13: isbn });
  },

  updateInDb: (id, ageRange, raceRep, format) => {
    return Book.findOneAndUpdate({ _id: id }, { age_range: ageRange, race_rep: raceRep, format: format });
  },
};

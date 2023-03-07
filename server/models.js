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

  updateInDb: (isbn, ageRange, raceRep) => {
    return Book.findOneAndUpdate({ isbn13: isbn }, { age_range: ageRange, race_rep: raceRep });
  },
};

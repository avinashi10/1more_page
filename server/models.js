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
  clearDb: Book.deleteMany({}),

  // CLIENT REQUESTS
  getAllFromDb: (cb) => {
    Book.find({}, (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  },
};

const mongoose = require('mongoose');

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/library');

// 2. Set up any schema and models needed by the app
const bookSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
  },
  google_books_id: {
    type: Number,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  age_range: {
    type: String,
    required: true,
  },
  themes: [
    {
      type: String,
    },
  ],
});
const Book = mongoose.model('Book', bookSchema);

// const creatorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   race: String,
//   gender: String,
//   pronouns: String,
//   identifiers: [
//     {
//       type: String,
//     },
//   ],
//   books: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Book',
//     },
//   ],
// });
// const Creator = mongoose.model('Creator', creatorSchema);

// 3. Export the models
module.exports = { Book };

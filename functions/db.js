const mongoose = require('mongoose');
const functions = require('firebase-functions');
require('dotenv').config({ path: '/Users/archaareads/Documents/Code/MVP/1more_page/.env' });

const MONGODB_URI = process.env.NODE_ENV !== 'production'
  ? process.env.MONGODB_URI
  : functions.config().mongodb.uri;

// 1. Use mongoose to establish a connection to MongoDB Atlas
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tlsAllowInvalidCertificates: true,
  authSource: 'admin',
});

// Check connection status
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

// 2. Set up any schema and models needed by the app
const bookSchema = new mongoose.Schema({
  google_books_id: {
    type: String,
    required: true,
  },
  isbn13: {
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
  },
  age_range: {
    type: String,
  },
  race_rep: {
    type: String,
  },
});

const Book = mongoose.model('Book', bookSchema);

// 3. Export the models
module.exports = Book;

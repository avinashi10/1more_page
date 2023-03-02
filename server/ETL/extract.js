// LIBRARY IMPORTS
require('dotenv').config();
const axios = require('axios');

const { API_URL, API_TOKEN, GOOGLE_LIB_ID } = process.env;

console.log(API_URL, process.env.API_URL);
const url = `${API_URL}/users/${GOOGLE_LIB_ID}/bookshelves/1003/volumes`;
console.log('url: ', url);

// GET 2018 bookshelf books from API
const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.googleapis.com/books/v1/users//bookshelves/1002/volumes',
  headers: {
    'Authorization': '',
  },
};

axios(config)
  .then((response) => {
    const extraction2018 = (JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

// LIBRARY IMPORTS
require('dotenv').config();
const axios = require('axios');

const { API_URL, API_TOKEN, GOOGLE_LIB_ID } = process.env;
console.log(API_URL, process.env.API_URL);
const url = `${API_URL}/users/${GOOGLE_LIB_ID}/bookshelves/1003/volumes`;
console.log('url: ', url);

// GET 2018 bookshelf books from API
axios.get(`${API_URL}/users/${GOOGLE_LIB_ID}/bookshelves/1003/volumes`, {
  headers: {
    Authorization: API_TOKEN
  },
})
  .then((response) => {
    const extracted2018 = response.data;
    console.log('TEST', extracted2018);
  })
  .catch((error) => {
    // console.error(error);
  });

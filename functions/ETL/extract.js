// LIBRARY IMPORTS
const functions = require('firebase-functions');
const axios = require('axios');

// LOCAL IMPORTS
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({ path: '/Users/archaareads/Documents/Code/MVP/1more_page/.env' });

const API_URL = functions.config().api.url;
const API_TOKEN = functions.config().api.token;
const GOOGLE_LIB_ID = functions.config().googlelib.id;

module.exports = {
  getFromBookshelf: ((shelfId) => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${API_URL}/users/${GOOGLE_LIB_ID}/bookshelves/${shelfId}/volumes`,
      headers: {
        Authorization: API_TOKEN,
      },
    };
    return axios(config);
  }),
};

// LIBRARY IMPORTS
require('dotenv').config({ path: '/Users/archaareads/Documents/Code/MVP/1more_page/.env' });

const axios = require('axios');

const { API_URL, API_TOKEN, GOOGLE_LIB_ID } = process.env;

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

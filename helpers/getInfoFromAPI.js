const axios = require('axios');
const KEY = require('../config.js');

const baseURL = 'https://www.rijksmuseum.nl/api/en/collection';

const getInfoFromAPI = async (searchQuery) => {
  try {
    const { data } = await axios.get(baseURL, {
      params: {
        key: KEY.TOKEN,
        involvedMaker: searchQuery,
      }
    });
    return data;
  } catch (e) {
    console.log('ERROR FROM API: ', e);
  }
};

// getInfoFromApi('Rembrandt van Rijn');



module.exports = { getInfoFromAPI };
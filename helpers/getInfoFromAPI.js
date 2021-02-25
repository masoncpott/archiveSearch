const axios = require('axios');
const KEY = require('../config.js');

const baseURL = 'https://www.rijksmuseum.nl/api/en/collection';

const getInfoFromAPI = (searchQuery) => {
  return axios.get(baseURL, {
    params: {
      key: KEY.TOKEN,
      involvedMaker: searchQuery,
    }
  })
    // .then((response) => console.log("SUCCES TO API", response.data))
    // .catch((err) => console.log("FAILURE TO API", err))


};

// getInfoFromApi('Rembrandt van Rijn');



module.exports.getInfoFromAPI = getInfoFromAPI;
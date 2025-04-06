const axios = require('axios');
require('dotenv').config();

const BASE_URL = `https://bymykel.github.io/CSGO-API/api/${process.env.EXTERNAL_API_LANG || 'en'}`;

exports.fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener ${endpoint}:`, error);
    throw error;
  }
};
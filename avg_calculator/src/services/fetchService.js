const axios = require('axios');
const { THIRD_PARTY_BASE_URL, AUTH_TOKEN } = require('../config');

const pathMap = {
  'p': 'primes',
  'f': 'fibo',
  'e': 'even',
  'r': 'rand',
};

async function fetchNumbers(id) {
  const type = pathMap[id];
  if (!type) return [];

  if (!AUTH_TOKEN) {
    console.error("No authorization token found!");
    return [];
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 500);

    console.log("Using token:", AUTH_TOKEN);

    const res = await axios.get(`${THIRD_PARTY_BASE_URL}/${type}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      signal: controller.signal,
    });

    clearTimeout(timeout); 
    return res.data.numbers || [];
  } catch (err) {
    console.error("Error fetching numbers:", err.message);
    return [];
  }
}

module.exports = { fetchNumbers };

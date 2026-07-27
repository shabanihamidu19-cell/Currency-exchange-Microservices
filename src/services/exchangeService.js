const axios = require('axios');

async function getRate(from, to) {
  try {
    // Primary API: Frankfurter
    const res = await axios.get(`https://api.frankfurter.app/latest?from=${from}&to=${to}`);
    if (res.data && res.data.rates && res.data.rates[to]) {
      return res.data.rates[to];
    }

    // Fallback API: ExchangeRate.host
    const res2 = await axios.get(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`);
    if (res2.data && res2.data.rates && res2.data.rates[to]) {
      return res2.data.rates[to];
    }

    // If both fail → return null
    return null;
  } catch (err) {
    console.error('Exchange API error:', err.message);
    return null;
  }
}

module.exports = { getRate };

const express = require('express');
const { getRate } = require('../services/exchangeService');
const { saveRecord, getHistory } = require('../db/fileStorage');
const router = express.Router();

router.post('/', async (req, res) => {
  const { from, to, amount } = req.body;
  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const rate = await getRate(from, to);
    if (!rate) {
      return res.status(404).json({ error: 'Currency not supported or rate unavailable' });
    }

    const result = amount * rate;
    const record = { from, to, amount, rate, result, timestamp: new Date().toISOString() };

    // Save to JSON file
    saveRecord(record);

    res.json(record);
  } catch (err) {
    res.status(500).json({ error: 'Conversion failed' });
  }
});

// GET /history with pagination
router.get('/history', (req, res) => {
  const history = getHistory();

  // Default values
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  // Calculate start & end
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginated = history.slice(startIndex, endIndex);

  res.json({
    page,
    limit,
    total: history.length,
    data: paginated
  });
});

module.exports = router;

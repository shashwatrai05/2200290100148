const express = require('express');
const router = express.Router();
const { fetchNumbers } = require('../services/fetchService');
const { updateWindow, getAverage } = require('../utils/windowManager');

const VALID_IDS = ['p', 'f', 'e', 'r'];

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  if (!VALID_IDS.includes(id)) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  const numbers = await fetchNumbers(id);
  const { prevState, currState } = updateWindow(id, numbers);
  const avg = getAverage(id);

  return res.json({
    windowPrevState: prevState,
    windowCurrState: currState,
    numbers,
    avg,
  });
});

module.exports = router;

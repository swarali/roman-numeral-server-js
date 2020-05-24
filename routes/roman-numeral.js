const express = require('express');
const createError = require('http-errors');

const { convertToRoman, UPPER_BOUND, LOWER_BOUND } = require('../service/roman-numeral');

const router = express.Router();

/* GET romannumerals. */
router.get('/', (req, res) => {
  const value = req.query.query;
  if (value === undefined) {
    throw createError(400, 'Cannot find \'query\' key in query string');
  }

  const num = Number(value);
  if (!Number.isSafeInteger(num)) {
    throw createError(400, 'Invalid value for \'query\' key in query string');
  }

  if (num < LOWER_BOUND || num > UPPER_BOUND) {
    throw createError(400, `Value: ${num} is out of range ${LOWER_BOUND}-${UPPER_BOUND}`);
  }

  res.send(convertToRoman(value));
});

module.exports = router;

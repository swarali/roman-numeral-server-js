const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const fullUrl = `${req.protocol}://${req.get('host')}`;
  res.render('index', {
    title: 'Roman numeral server',
    message: `Send request 'GET ${fullUrl}/romannumeral?query={integer}'`,
  });
});

module.exports = router;

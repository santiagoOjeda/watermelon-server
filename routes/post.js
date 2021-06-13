const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('TEST ROOT');
});

router.get('/all', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ data: 'jdjdjdjd' });
});

module.exports = router;

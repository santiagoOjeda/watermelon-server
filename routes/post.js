const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('TEST ROOT');
});

router.get('/all', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }));
});

module.exports = router;

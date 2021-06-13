const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('TEST ROOT');
});

router.get('/all', function (req, res) {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'Content-Type',
    'application/json',
    'http://localhost:9000'
  );
  res.end(JSON.stringify({ a: 2 }));
});

module.exports = router;

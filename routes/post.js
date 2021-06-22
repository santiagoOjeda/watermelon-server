const express = require('express');
const app = express();
const router = express.Router();
const postService = require('../services/post');
const cors = require('cors');
//res.setHeader('Access-Control-Allow-Origin', '*');
app.use(cors());

router.get('/', function (req, res) {
  res.send(postService.save());
});

router.get('/all', async function (req, res) {
  const postList = await postService.list();
  res.json(postList);
});

router.post('/save', async (req, res) => {
  const postList = await postService.save(req.body);
  res.send(postList);
});

router.post('/save-image', async (req, res) => {
  res.send('Image saved');
});

module.exports = router;

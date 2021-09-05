const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const postService = require('../services/post');
const multer = require('multer');
const cors = require('cors');
// middlewares
app.use(cors());

app.use(
  multer({ dest: path.join(__dirname, 'public/uploads') }).single('image')
);

// reoutes
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
  res.send(req.file);
});

module.exports = router;

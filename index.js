const express = require('express');
const app = express();
const posts = require('./routes/post');
const PORT = process.env.PORT || 5000;

app.use('/post', posts);

app.get('/', function (req, res) {
  res.send('WORKK !!!');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

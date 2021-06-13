const express = require('express');
const app = express();
const posts = require('./routes/post');
var cors = require('cors');
const PORT = process.env.PORT || 5000;

var corsOptions = {
  origin: 'http://watermelon-server.herokuapp.com',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use('/post', posts);

app.get('/', function (req, res) {
  res.send('WORKK !!!');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

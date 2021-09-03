const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const posts = require('./src/routes/post');
require('./connection');

app.use(cors());

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser({ limit: '50mb' }));

app.use('/post', posts);

app.get('/', function (req, res) {
  res.send('WORKK !!!');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

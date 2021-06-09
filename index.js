const express = require("express");
const { get } = require("http");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  /*   .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index')) */
  .get("/test", function (req, res) {
    res.send("WORKK!!!!");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

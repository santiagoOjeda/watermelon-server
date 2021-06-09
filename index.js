const express = require("express");
const { get } = require("http");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .get("/", function (req, res) {
    res.send("WORKK!!!!");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

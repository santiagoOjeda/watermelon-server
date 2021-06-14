const express = require("express");
const router = express.Router();
const jsonData = require("../mocks/post.json");

router.get("/", function (req, res) {
  res.send("TEST ROOT");
});

router.get("/all", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(jsonData);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const jsonData = require("../mocks/post.json");
const postService = require("../services/post");

router.get("/", function (req, res) {
  res.send(postService.save());
});

router.get("/all", async function (req, res) {
  const postList = await postService.list();
  res.json(postList);
});

module.exports = router;

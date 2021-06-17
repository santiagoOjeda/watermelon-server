const express = require("express");
const router = express.Router();
const postService = require("../services/post");

router.get("/", function (req, res) {
  res.send(postService.save());
});

router.get("/all", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const postList = await postService.list();
  res.json(postList);
});

router.post("/save", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  await postService.save(req.body);
});

module.exports = router;

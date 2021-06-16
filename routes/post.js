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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  const postList = await postService.save(req.body);
  res.send(postList);
});

module.exports = router;

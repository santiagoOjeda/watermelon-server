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
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:9000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  const postList = await postService.save(req.body);
  res.send(postList);
});

module.exports = router;

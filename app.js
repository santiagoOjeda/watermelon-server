const express = require("express");
const cors = require("cors");
require("./connection");
const bodyParser = require("body-parser");
const posts = require("./src/routes/post");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("WORKK !!!");
});

app.use("/post", posts);

export default app;

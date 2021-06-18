const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const posts = require("./routes/post");
const postService = require("./services/post");
require("./connection");

app.use(cors());

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/post", posts);

app.use("/save", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const postList = postService.save(req.body);
  res.send(postList);
});

app.get("/", function (req, res) {
  res.send("WORKK !!!");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

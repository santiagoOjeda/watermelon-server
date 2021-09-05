const express = require("express");
const cors = require("cors");
require("./connection");
const bodyParser = require("body-parser");
const posts = require("./src/routes/post");

const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.get("/", function (req, res) {
  res.send("WORKK !!!");
});

app.use("/post", posts);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

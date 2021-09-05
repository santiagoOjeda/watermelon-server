import "./connection";
const posts = require("./src/routes/post");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser());

app.get("/", function (req, res) {
  res.send("WORKK !!!");
});

app.use("/post", posts);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

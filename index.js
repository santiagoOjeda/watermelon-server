const express = require("express");

const app = express();

app.get("/test", function (req, res) {
  res.send("Hello");
});

app.listen(4000);

console.log("server running!!!!!");

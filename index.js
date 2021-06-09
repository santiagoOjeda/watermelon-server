const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.get("/test", function (req, res) {
  // res.sendFile(path.join(__dirname + "/index.html"));
  res.send("WORK!!!!!");
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));

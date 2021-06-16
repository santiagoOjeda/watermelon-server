const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const posts = require("./routes/post");
require("./connection");

const corsOptions = {
  origin: "http://watermelon-server.herokuapp.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/post", posts);

app.get("/", function (req, res) {
  res.send("WORKK !!!");
});

app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

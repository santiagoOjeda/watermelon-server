const express = require("express");
const app = express();

var cors = require("cors");
const PORT = process.env.PORT || 5000;
const PostModel = require("./schemas/post");
const posts = require("./routes/post");

require("./connection");

var corsOptions = {
  origin: "http://watermelon-server.herokuapp.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use("/post", posts);
app.get("/", function (req, res) {
  res.send("WORKK !!!");
});
/* const post = new PostModel({
  title: "Santiago es muy groso 3",
  paragraph: "Si efectivamente sos un capo man",
});
 */
/* post.save((err, document) => {
  if (err) console.log(err);
  console.log(document);
}); */

/* const getAllPost = async () => {
  const postList = await PostModel.find();
  console.log(postList);
};

getAllPost(); */

app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

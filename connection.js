const mongoose = require("mongoose");

const uri =
  "mongodb+srv://santi:1208intocabLES@cluster0.o1tff.mongodb.net/blog?retryWrites=true&w=majority";

const db = mongoose.connection;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.once("open", (_) => console.log(":::::::::: Connection open ::::::::::"));

db.on("error", (err) => console.log(":::::::::: Error ::::::::::", err));

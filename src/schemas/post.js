const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String },
  paragraph: { type: String },
  date: { type: Date },
  author: { type: String },
  bgColor: { type: String },
});

module.exports = model("Post", PostSchema);

const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String },
  paragraph: { type: String },
});

module.exports = model("Post", PostSchema);

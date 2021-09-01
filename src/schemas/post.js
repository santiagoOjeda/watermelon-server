const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  title: { type: String },
  paragraph: { type: String },
  date: { type: Date, default: Date.now },
  author: { type: String },
  bgColor: { type: String },
  img: { type: Buffer },
});

module.exports = model('Post', PostSchema);

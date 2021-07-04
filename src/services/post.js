const PostModel = require('../schemas/post');

const postService = {
  save: (body) => {
    const post = new PostModel({
      title: body.title,
      paragraph: body.paragraph,
      date: body.date,
      author: body.author,
      bgColor: body.bgColor,
    });
    post.save((err, document) => {
      if (err) console.log(err);
      console.log(document);
    });
    return post;
  },
  list: async () => {
    const postList = await PostModel.find();
    return postList;
  },
};

module.exports = postService;

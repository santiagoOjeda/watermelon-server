const PostModel = require("../schemas/post");

const postService = {
  save: () => {
    return "Save";
  },
  list: async () => {
    const postList = await PostModel.find();
    return postList;
  },
};

module.exports = postService;

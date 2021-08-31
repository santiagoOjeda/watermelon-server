const postService = require("../services/post");

export const getPosts = (req, res) => {};

export const getPostsById = (req, res) => {};

export const editPostsById = (req, res) => {};

export const deletePostsById = (req, res) => {};

export const savePost = (req, res) => {
  const postList = postService.save(req.body);
  res.send(postList);
};

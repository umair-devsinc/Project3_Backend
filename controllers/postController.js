const db = require("../models");
const postService = require("../services/postService");
const post = async (req, res) => {
  try {
    const post = postService.createPost(req.body);
    res.status(200).send(post);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const get = async (req, res) => {
  try {
    const posts = await postService.getPost(req.query.id, req.params["offset"]);

    res.status(200).send(posts);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const count = async (req, res) => {
  try {
    const postCount = await postService.getCount(req.query.id);

    res.status(200).send({ count: postCount });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const singlePost = async (req, res) => {
  try {
    const post = await postService.getSinglePost(req.params["id"]);

    res.status(200).send(post);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const edit = async (req, res) => {
  try {
    const post = postService.editPost(req.params["id"], req.body);
    res.status(200).send(post);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deletePost = async (req, res) => {
  try {
    postService.deletePost(req.query.id);

    res.status(200).send("deleted");
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

module.exports = {
  post,
  get,
  edit,
  deletePost,
  singlePost,
  count,
};

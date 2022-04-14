const db = require("../models");
const commentService = require("../services/commentService");

const post = async (req, res) => {
  try {
    const comment = await commentService.createComment(req.body);
    res.status(200).send(comment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const get = async (req, res) => {
  try {
    const comments = await commentService.getComments();

    res.status(200).send(comments);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

module.exports = {
  post,
  get,
};

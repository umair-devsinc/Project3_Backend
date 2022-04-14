const db = require("../models");

const createComment = async (payload) => {
  const { text, uid, postId } = payload;

  const comment = await db.Comment.create({
    text: text,
    uid: uid,
    postId: postId,
  });
  return comment;
};

const getComments = async () => {
  const comments = await db.Post.findAll({
    include: [
      {
        model: db.Comment,
        include: [db.User],
        required: true,
      },
    ],
  });
  return comments;
};

module.exports = { createComment, getComments };

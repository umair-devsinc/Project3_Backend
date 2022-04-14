const db = require("../models");

const createPost = async (payload) => {
  const { title, content, flag, uid } = payload;

  const post = await db.Post.create({
    title: title,
    content: content,
    flag: flag,
    uid: uid,
  });
  return post;
};

const getPost = async (id, offset) => {
  let conditions = id
    ? {
        uid: id,
        flag: false,
      }
    : {
        flag: true,
      };

  const posts = await db.Post.findAll({
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: db.Comment,
        include: [db.User],
        required: false,
      },
      {
        model: db.User,
      },
    ],
    where: conditions,
    offset: offset,
    limit: 2,
  });

  return posts;
};

const getCount = async (id) => {
  let conditions = id
    ? {
        uid: id,
        flag: false,
      }
    : {
        flag: true,
      };

  const postCount = await db.Post.count({
    where: conditions,
  });
  return postCount;
};

const getSinglePost = async (id) => {
  const post = await db.Post.findOne({
    where: { id: id },
    include: [
      {
        model: db.Comment,
        include: [db.User],
        required: false,
      },
      {
        model: db.User,
      },
    ],
  });
  return post;
};

const editPost = async (id, payload) => {
  const { title, content, flag } = payload;

  const post = await db.Post.update(
    {
      title: title,
      content: content,
      flag: flag,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return post;
};

module.exports = { createPost, getPost, getCount, getSinglePost, editPost };

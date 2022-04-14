const db = require("../models");

const signUp = async (payload) => {
  const { firstName, lastName, email, password } = payload;

  const userExist = await db.User.findOne({
    where: {
      email: email,
    },
  });

  if (userExist) {
    throw new Error("Email already Exist");
  } else {
    const user = await db.User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    return user;
  }
};

const signIn = async (email, password) => {
  const user = await db.User.findOne({
    where: {
      email: email,
      password: password,
    },
  });
  if (!user) {
    throw new Error("Plz enter correct email and password");
  } else {
    return user;
  }
};

const findUser = async (userId) => {
  const user = await db.User.findOne({
    where: {
      id: userId,
    },
  });
  return user;
};

const deletePost = async (id) => {
  const post = await db.Post.destroy({
    where: {
      id: id,
    },
  });
  return post;
};

module.exports = { signUp, signIn, findUser, deletePost };

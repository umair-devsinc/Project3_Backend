const jwt = require("jsonwebtoken");
const userService = require("../services/userService");

const register = async (req, res) => {
  try {
    const user = await userService.signUp(req.body);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz filled the data" });
    }

    const user = await userService.signIn(email, password);
    let token = jwt.sign({ id: user.id.toString() }, process.env.SECRET_KEY);

    res
      .cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: false,
      })
      .status(200)
      .json({ id: user.id, message: "User Signin Successfully" });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

const find = async (req, res) => {
  try {
    const user = await userService.findUser(req.query.id);

    res.status(200).send(user);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

module.exports = {
  register,
  login,
  find,
};

module.exports = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!(email && password && firstName && lastName)) {
    res.status(400).json({ error: "All input is required" });
  }
  next();
};

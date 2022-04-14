const express = require("express");
const rootRouter = express.Router();

rootRouter.use(require("./users"));
rootRouter.use(require("./posts"));
rootRouter.use(require("./comments"));

module.exports = rootRouter;

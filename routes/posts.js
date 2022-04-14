const { Router } = require("express");
const db = require("../models");
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");

const router = Router();

router.post("/post", auth, postController.post);

router.get("/post/:offset", postController.get);

router.get("/postCount", postController.count);

router.get("/singlePost/:id", postController.singlePost);

router.put("/post/:id", auth, postController.edit);

router.delete("/post", auth, postController.deletePost);

module.exports = router;

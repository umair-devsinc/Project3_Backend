const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const validation = require("../middleware/validation");

router.post("/register", validation, userController.register);

router.get("/signIn", userController.login);

router.get("/user", userController.find);

module.exports = router;

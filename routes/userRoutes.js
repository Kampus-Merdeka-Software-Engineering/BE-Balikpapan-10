const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();

router.get("/signIn", userController.getUser);

module.exports = router;

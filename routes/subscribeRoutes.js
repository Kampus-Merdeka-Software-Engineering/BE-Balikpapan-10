const express = require("express");
const { subscribeController } = require("../controllers");
const router = express.Router();

router.post("/subscribe/:id", subscribeController.subscribeLesson);

module.exports = router;

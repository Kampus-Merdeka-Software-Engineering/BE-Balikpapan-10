const express = require("express");
const { lessonController } = require("../controllers");
const router = express.Router();

router.get("/lessons", lessonController.getLessons);
router.post("/lessons", lessonController.createLesson);

module.exports = router;

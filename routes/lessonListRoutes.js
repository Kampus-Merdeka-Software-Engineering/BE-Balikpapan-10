const express = require("express");
const { lessonlistController } = require("../controllers");
const router = express.Router();

router.get("/lessonslist", lessonlistController.getLessonsList);
router.post("/lessonslist", lessonlistController.createLessonList);

module.exports = router;

const express = require('express');
const { lessonController } = require('../controllers');
const router = express.Router();

router.get('/lessons', lessonController.getAllLessons);

module.exports = router;
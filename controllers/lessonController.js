const { lessonService } = require("../services");

async function getLessons(req, res) {
  const lessons = await lessonService.getAllLessons();

  res.status(200).json(lessons);
}

async function createLesson(req, res) {
  const lesson = req.body;

  const createdLesson = await lessonService.createLesson(lesson);

  res.status(201).json({
    message: "lesson created",
  });
}

module.exports = {
  getLessons,
  createLesson,
};

const { lessonService } = require("../services");

async function getLessons(req, res) {
  try {
    const lessons = await lessonService.getAllLesson();
    res.status(200).json({
      message: "Successfully fetched all lesson",
      data: lessons,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createLesson(req, res) {
  try {
    const lesson = req.body;
    const createdLesson = await lessonService.createLesson(lesson);
    res.status(201).json({ message: "Lesson has been created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getLessonById(req, res) {
  const lesson_id = Number(req.params.id);
  const getLesson = await lessonService.getLessonById(lesson_id);

  res.status(200).json(getLesson);
}

module.exports = {
  getLessons,
  createLesson,
  getLessonById,
};

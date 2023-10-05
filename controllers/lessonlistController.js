const { lessonlistService } = require("../services");

async function getLessonsList(req, res) {
  try {
    const lessons = await lessonlistService.getLessonsList();
    res.status(200).json({
      message: "Successfully fetched all lessons",
      data: lessons,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createLessonList(req, res) {
  try {
    const lesson = req.body;
    const createdLesson = await lessonlistService.createLessonList(lesson);
    res.status(201).json({ message: "Lesson has been created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getLessonsList,
  createLessonList,
};

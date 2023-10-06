const { subscribeService } = require("../services");

async function subscribeLesson(req, res) {
  const lesson = req.body;
  const lessonId = Number(req.params.id);
  const subscribeLesson = await subscribeService.subscribeLesson(
    lesson,
    lessonId
  );

  res.status(200).json(subscribeLesson);
}

module.exports = {
  subscribeLesson,
};

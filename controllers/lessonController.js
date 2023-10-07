const { lessonService } = require('../services');
async function getLessons(req, res) {
    const lessons = await lessonService.getAllLesson();
    console.log('masuk ke path/');

    res.status(200).json(lessons);
    // res.json({ name: 'OK' });
}

async function createLesson(req, res){
    const lesson = req.body;

    const createdLesson = await lessonService.createLesson(lesson);

    res.status(201).json(createLesson);
}

async function getLessonById(req, res){
    const lesson_id = Number(req.params.id);
    const getLesson = await lessonService.getLessonById(lesson_id);

    res.status(200).json(getLesson);
}

module.exports = {
    getLessons,
    createLesson,
    getLessonById
};
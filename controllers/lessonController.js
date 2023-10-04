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

module.exports = {
    getLessons,
    createLesson
};
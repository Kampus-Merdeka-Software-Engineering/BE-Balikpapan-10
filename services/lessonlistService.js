const { prisma } = require("../config/prisma");

async function getLessonsList() {
  try {
    const lessons = await prisma.lesson.findMany();
    return lessons;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

async function createLessonList(lesson) {
  try {
    const createdLesson = await prisma.lesson.create({
      data: {
        title: lesson.title,
        description: lesson.description,
        level: lesson.level,
        age: lesson.age,
        image: lesson.image,
      },
    });

    return createdLesson;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getLessonsList,
  createLessonList,
};

const { prisma } = require("../config/prisma");

async function getAllLessons() {
  try {
    const lessons = await prisma.lesson.findMany();

    return lessons;
  } catch (error) {
    console.error(error);

    throw new Error();
  }
}

async function createLesson(lesson) {
  try {
    const mappedLesson = {
      data: {
        title: lesson.title,
        description: lesson.description,
        level: lesson.level,
        age: lesson.age,
        image: lesson.image,
      },
    };

    const createdLesson = await prisma.lesson.create(mappedLesson);

    return createdLesson;
  } catch (error) {
    console.error(error);

    throw new Error();
  }
}

module.exports = {
  getAllLessons,
  createLesson,
};

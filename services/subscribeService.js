const { prisma } = require("../config/prisma");

async function subscribeLesson(lesson, lessonId) {
  try {
    const subscribeUser = await prisma.lesson.subscribe({
      where: {
        id_lesson: lessonId,
      },
      data: {
        id_user: userId,
      },
    });
    return subscribeUser;
  } catch {
    console.error(error);
    throw new Error("Failed to subscribe to the lesson");
  }
}

module.exports = {
  subscribeLesson,
};

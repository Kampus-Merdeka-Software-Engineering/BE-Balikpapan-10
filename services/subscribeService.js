const { prisma } = require("../config/prisma");

async function subscribeLesson(lesson, lessonId) {
  try {
    const subscribeUser = await prisma.lesson.subscribe({
      where: {
        id_lesson: lessonId,
      },
      data: {
        email: user.email,
      },
    });
    return subscribeUser;
  } catch {
    // console.error(error);
    // throw new Error();
  }
}

module.exports = {
  subscribeLesson,
};

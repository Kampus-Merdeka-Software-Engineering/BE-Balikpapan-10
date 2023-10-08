const { prisma } = require("../config/prisma");

async function getLanding() {
  try {
    const lessons = await prisma.lesson.findMany();
    return lessons;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

module.exports = {
  getLanding,
};

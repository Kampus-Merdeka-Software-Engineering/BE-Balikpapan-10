const { prisma } = require("../config/prisma");

async function getHome() {
  try {
    const lessons = await prisma.lesson.findMany();
    return lessons;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

module.exports = {
  getHome,
};

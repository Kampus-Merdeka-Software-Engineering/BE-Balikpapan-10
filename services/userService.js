const { prisma } = require("../config/prisma");

async function getUser() {
  try {
    const user = await prisma.team.findMany();
    return user;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

module.exports = {
  getUser,
};

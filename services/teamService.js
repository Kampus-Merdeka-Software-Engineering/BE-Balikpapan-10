const { prisma } = require("../config/prisma");

async function getTeam() {
  try {
    const team = await prisma.team.findMany();
    return team;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

async function createTeam(team) {
  try {
    const createdTeam = await prisma.team.create({
      data: {
        name: team.name,
        role: team.role,
        image_people: team.image_people,
        image_github: team.image_github,
        image_linkedin: team.image_linkedin,
        profil_github: team.profil_github,
        profil_linkedin: team.profil_linkedin,
      },
    });

    return createdTeam;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getTeam,
  createTeam,
};

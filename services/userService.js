const { prisma } = require("../config/prisma");

async function getUser() {
  try {
    const user = await prisma.user.findMany();
    return user;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

async function createUser(user) {
  try {
    const mappedUser = {
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    };

    const createdUser = await prisma.user.create(mappedUser);
    return createdUser;
  } catch {
    console.error(error);

    throw new Error();
  }
}

async function editUser(user, userId) {
  try {
    const updateUser = await prisma.user.update({
      where: {
        id_user: userId,
      },
      data: {
        password: user.password,
      },
    });
    return updateUser;
  } catch {
    // console.error(error);
    // throw new Error()
  }
}

module.exports = {
  getUser,
  createUser,
  editUser,
};

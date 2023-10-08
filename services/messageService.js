const { prisma } = require("../config/prisma");

async function getMessage() {
  try {
    const message = await prisma.message.findMany();
    return message;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

async function sendMessage(message) {
  try {
    const sentMessage = await prisma.message.create({
      data: {
        name: message.name,
        email: message.email,
        message: message.message,
      },
    });

    return sentMessage;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getMessage,
  sendMessage,
};

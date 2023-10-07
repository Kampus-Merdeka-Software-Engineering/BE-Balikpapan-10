const { prisma } = require('../config/prisma');
async function sendMessage(message) {
    try {
        const mappedMessage = {
            data : {
                name: message.name,
                email: message.email,
                message: message.message
            }
        }

        const sentMessage = await prisma.message.create(mappedMessage);

        return sentMessage
    }

    catch (error) {
        console.error(error);

        throw new Error()
    }
}

module.exports = {
    sendMessage
}
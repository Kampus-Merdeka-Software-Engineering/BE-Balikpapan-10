const { messageService } = require('../services');
async function sendMessage(req, res) {
    const message = req.body;

    const sentMessage = await messageService.sendMessage(message);

    res.status(201).json(sentMessage);
}

module.exports = {
    sendMessage
}
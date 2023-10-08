const { messageService } = require("../services");

async function getMessage(req, res) {
  try {
    const message = await messageService.getMessage();
    res.status(200).json({
      message: "Successfully fetched all message",
      data: message,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function sendMessage(req, res) {
  try {
    const message = req.body;
    const sentMessage = await messageService.sendMessage(message);
    res.status(201).json({ message: "Message has been sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getMessage,
  sendMessage,
};

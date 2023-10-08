const express = require("express");
const { messageController } = require("../controllers");
const router = express.Router();

router.get("/message", messageController.getMessage);
router.post("/message", messageController.sendMessage);

module.exports = router;

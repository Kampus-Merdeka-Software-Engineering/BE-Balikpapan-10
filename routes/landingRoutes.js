const express = require("express");
const { landingController } = require("../controllers");
const router = express.Router();

router.get("/landing", landingController.getLanding);

module.exports = router;

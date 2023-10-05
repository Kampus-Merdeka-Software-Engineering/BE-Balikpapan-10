const express = require("express");
const { teamController } = require("../controllers");
const router = express.Router();

router.get("/team", teamController.getTeam);
router.post("/team", teamController.createTeam);

module.exports = router;

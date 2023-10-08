const express = require("express");
const { homeController } = require("../controllers");
const router = express.Router();

router.get("/home", homeController.getHome);

module.exports = router;

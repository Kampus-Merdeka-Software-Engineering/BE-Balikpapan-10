const express = require('express');
const { homeController } = require('../controllers');
const router = express.Router();

router.get('/home', homeController.showHome);

module.exports = router;
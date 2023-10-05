const express = require('express');
const { userController } = require('../controllers');
const router = express.Router();

router.post('/signUp', userController.createUser);
router.put('/editUser/:id', userController.editUser);

module.exports = router;
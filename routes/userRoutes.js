const express = require('express');
const { userController } = require('../controllers');
const router = express.Router();

router.post('/signUp', userController.createUser);
router.put('/editUser/:id', userController.editUser);
router.get('/editProfile', userController.editProfile);

module.exports = router;
const { userService } = require('../services');
const path = require('path');

async function createUser(req, res) {
    const user = req.body;
    const createdUser = await userService.createUser(user);

    res.status(201).json(createdUser);
}

async function editUser(req, res) {
    const user = req.body;
    const userId = Number(req.params.id);
    const editedUser = await userService.editUser(user, userId);

    res.status(200).json(editedUser);
}

async function editProfile(req, res) {
    res.sendFile(path.join(__dirname, '../public/editProfile.html'));
}

module.exports = {
    createUser,
    editUser,
    editProfile
}

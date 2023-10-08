const { userService } = require("../services");

async function getUser(req, res) {
  try {
    const user = await userService.getUser();
    res.status(200).json({
      message: "Successfully signed in",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createUser(req, res) {
  try {
    const user = req.body;
    const createdUser = await userService.createUser(user);
    res.status(201).json({ message: "User has been created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function editUser(req, res) {
  const user = req.body;
  const userId = Number(req.params.id);
  const editedUser = await userService.editUser(user, userId);

  res.status(200).json(editedUser);
}

module.exports = {
  getUser,
  createUser,
  editUser,
};

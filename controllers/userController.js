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

module.exports = {
  getUser,
};

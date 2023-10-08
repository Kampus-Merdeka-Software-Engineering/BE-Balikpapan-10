const { homeService } = require("../services");

async function getHome(req, res) {
  try {
    const lessons = await homeService.getHome();
    res.status(200).json({
      message: "Successfully fetched all lessons",
      data: lessons,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getHome,
};

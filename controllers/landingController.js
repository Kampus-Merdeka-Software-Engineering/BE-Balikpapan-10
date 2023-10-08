const { landingService } = require("../services");

async function getLanding(req, res) {
  try {
    const lessons = await landingService.getLanding();
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
  getLanding,
};

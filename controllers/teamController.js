const { teamService } = require("../services");

async function getTeam(req, res) {
  try {
    const team = await teamService.getTeam();
    res.status(200).json({
      message: "Successfully fetched all team",
      data: team,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createTeam(req, res) {
  try {
    const team = req.body;
    const createdTeam = await teamService.createTeam(team);
    res.status(201).json({ message: "Team has been created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getTeam,
  createTeam,
};

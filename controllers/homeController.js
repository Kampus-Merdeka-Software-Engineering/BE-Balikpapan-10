const { lessonService } = require('../services');
const path = require('path');
async function showHome(req, res) {
    res.sendFile(path.join(__dirname, '../public/HomePage.html'));
}

module.exports = {
    showHome,
};
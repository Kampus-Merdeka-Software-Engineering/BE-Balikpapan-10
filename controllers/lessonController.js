async function getAllLessons(req, res) {
    console.log('masuk ke path/');

    res.json({ name: 'OK' });
}

module.exports = {
    getAllLessons
};
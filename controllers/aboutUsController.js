// controllers/aboutUsController.js
exports.getAboutUs = (req, res) => {
    console.log('About Us');
    res.send('<h1 style="color: red;">About Us</h1>');
};

// controllers/homeController.js
exports.getHome = (req, res) => {
    console.log('Home Page');
    res.send('<h1 style="color: red;">Home Page</h1>');
};

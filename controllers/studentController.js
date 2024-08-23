// controllers/studentController.js
exports.addStudent = (req, res) => {
    console.log('Student has been added');
    res.send('<h1 style="color: red;">Student has been added</h1>');
};

exports.updateStudent = (req, res) => {
    console.log('Student has been updated');
    res.send('<h1 style="color: red;">Student has been updated</h1>');
};

exports.deleteStudent = (req, res) => {
    console.log('Student has been deleted');
    res.send('<h1 style="color: red;">Student has been deleted</h1>');
};

exports.getAllStudents = (req, res) => {
    console.log('Students List');
    res.send('<h1 style="color: red;">Students List</h1>');
};

exports.getStudentById = (req, res) => {
    console.log('Student Details');
    res.send('<h1 style="color: red;">Student Details</h1>');
};

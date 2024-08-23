// routes/routes.js
const express = require('express');
const homeController = require('../controllers/homeController');
const contactUsController = require('../controllers/contactUsController');
const aboutUsController = require('../controllers/aboutUsController');
const studentController = require('../controllers/studentController');

const routes = express.Router();

// Web routes
routes.get('/', homeController.getHome);
routes.get('/contact-us', contactUsController.getContactUs);
routes.get('/about-us', aboutUsController.getAboutUs);

// Student routes
routes.post('/student/add', studentController.addStudent);
routes.put('/student/update', studentController.updateStudent);
routes.delete('/student/delete', studentController.deleteStudent);
routes.get('/students', studentController.getAllStudents);
routes.get('/student/:id', studentController.getStudentById);

module.exports = routes;

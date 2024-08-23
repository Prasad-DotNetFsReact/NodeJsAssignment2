// app.js
const express = require('express');
const app = express();
const port = 3002;
const routes = require('./routes/routes');

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

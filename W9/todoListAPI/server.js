const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./modules/todoListModel'),
    bodyParser = require('body-parser');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://lab6:1234@nguyenlegiahuy-00130620.ged10.mongodb.net/001306208');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/todoListRoutes');
routes(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
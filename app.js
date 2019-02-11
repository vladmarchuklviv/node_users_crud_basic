const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user.route');
const app = express();

const mongoose = require('mongoose');
let mongoDB = 'mongodb://127.0.0.1/users_crud';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);


app.listen(3000, () => {
    console.log('Server is up and running on port numner 3000');
});

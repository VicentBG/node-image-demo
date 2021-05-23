const express = require('express');

const app = express();

const router = express.Router();

const db = require('./db');

const cats = require('./routes/cats');


const path = __dirname + '/views/';

const port = 8080;


app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use(express.urlencoded({ extended: true}));

app.use(express.static(path));

app.use('/cats', cats);


app.listen(port, () => {
    console.log('Example app listening on port 8080!');
});
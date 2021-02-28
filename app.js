
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.HTTP_PORT;

// middlewares
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/hello-world', (req, res) => {
    res.send('Hello World on respective path');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port , () => {
    console.log(`Listening on port ${port}`);
});

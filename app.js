
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

// middlewares
app.use(morgan('dev'));
app.use(express.static('public', { 'extensions': ['html', 'htm'] }));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Pablo Rodríguez',
        title: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Pablo Rodríguez',
        title: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Pablo Rodríguez',
        title: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port , () => {
    console.log(`Listening on port ${port}`);
});

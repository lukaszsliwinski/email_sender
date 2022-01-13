const express = require('express');
const nodemailer = require('nodemailer');

const port = 3000;
const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Email sender',
    });
});

app.listen(port);
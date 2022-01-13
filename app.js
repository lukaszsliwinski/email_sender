const express = require('express');
const nodemailer = require('nodemailer');

const port = 3000;
const app = express();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: '',
        pass: '',
    },
    tls: {
        rejectUnauthorized: false,
    },
});

let mailDetails = {
    from: '',
    to: '',
    subject: '',
    text: '',
};

transporter
    .sendMail(mailDetails)
    .then(() => console.log('Email was sent'))
    .catch((err) => console.log(err));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Email sender',
    });
});

app.listen(port);
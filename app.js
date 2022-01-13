const express = require('express');
const nodemailer = require('nodemailer');

const port = 3000;
const app = express();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: '',
    },
    tls: {
        rejectUnauthorized: false,
    },
});

let mailOptions = {
    from: '',
    to: '',
    subject: '',
    text: '',
};

transporter
    .sendMail(mailOptions)
    .then(() => console.log('Email was sent'))
    .catch((err) => console.log(err));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Email sender',
    });
});

app.listen(port);
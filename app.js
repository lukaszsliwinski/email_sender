const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

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


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
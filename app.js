const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const port = 3000;
const app = express();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SENDER,
        pass: process.env.PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

let mailDetails = {
    from: process.env.SENDER,
    to: process.env.RECIPIENT,
    subject: '',
    text: '',
};

// transporter
//     .sendMail(mailDetails)
//     .then(() => console.log('Email was sent'))
//     .catch((err) => console.log(err));


app.use(express.static('./public'))


app.listen(port);
console.log('Server started at http://localhost:' + port);
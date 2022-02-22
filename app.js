const express = require('express');
const bp = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const port = 3000;
const app = express();

app.use(express.static('./public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }))


app.post('/', function(req, res) {
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
        to: req.body.recipient,
        subject: req.body.title,
        text: req.body.message,
    };
    
    transporter
        .sendMail(mailDetails)
        .then(() => console.log(`Email was sent to ${req.body.recipient}`))
        .catch((err) => console.log(err));

    res.sendStatus(200);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
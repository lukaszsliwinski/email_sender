const nodemailer = require('nodemailer');
require('dotenv').config();

email = (req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        service: 'office365',
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
}

module.exports = email
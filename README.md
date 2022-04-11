# Email sender

## About
Application for sending e-mail to any address. My first application using Node.js on backend and React on frontend. The app uses previously set outlook account and password to send a message.

## Demo
https://emailsenderportfolio.herokuapp.com/

## Used technologies
JavaScript<br>
Node.js<br>
Express<br>
React<br>
HTML5<br>
CSS3<br>
Bootstrap

## Setup and run on localhost (Windows)
1 Install Node.js v.16 from website:<br>
&emsp;https://nodejs.org/en/download/<br><br>
2 Download repository
```bash
git clone https://github.com/lukaszsliwinski/email_sender
```
3 Go into main directory
```bash
cd email_sender
```
4 Install required packages
```bash
npm install
```
5 Create .env file in main directory. In this file, create two variables:
```bash
SENDER = 'address@outlook.com'
PASSWORD = 'password'
```
Assign an email address and password from the account that will be the sender. Important: the app is configured for outlook accounts.<br><br>
6 Run application on localhost
```bash
node app.js
```
7 Enter 'localhost:3000' in browser to run the app
# Email sender

## About
Application for sending e-mail to any address. My first application using Node.js on backend and React on frontend.

## Used technologies
JavaScript<br>
Node.js 16<br>
React 17<br>
HTML5<br>
CSS3<br>
Bootstrap 5

## Setup and run (Windows)
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
SENDER = 'address@gmail.com'
PASSWORD = 'password'
```
Assign an email address and password from the account that will be the sender. Important: the app is configured for gmail accounts.<br><br>
6 On sender's gmail account set the 'less secure app access' as 'on'.<br>
&emsp;For more information go to:<br>
&emsp;https://support.google.com/accounts/answer/6010255?hl=en<br><br>
7 Run application on localhost
```bash
node app.js
```
8 Enter 'localhost:3000' in browser to run the app
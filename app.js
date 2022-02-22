const express = require('express');
const bp = require('body-parser');
const email = require('./controllers/email')

const port = 3000;
const app = express();

app.use(express.static('./public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }))

app.post('/', email);

app.listen(port);
console.log('Server started at http://localhost:' + port);
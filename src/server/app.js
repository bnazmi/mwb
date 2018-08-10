const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('./controllers/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(controllers);
app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);

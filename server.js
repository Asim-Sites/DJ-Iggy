'use strict';
const nodemailer = require('nodemailer');
const express = require("express");
const app = express();
const path = require('path') // research the path native node module
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const basicAuth = require('basic-auth');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const port = process.env.PORT || 3000
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
  defaultLayout: "main",
  extname: ".hbs",
  helpers: require("handlebars-helpers")(),
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
// require('./data/djiggy-db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(expressValidator());

// middleware
const indexRouter = require('./controllers/index');
app.use(indexRouter);

var auth = function (req, res, next) {
  var user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
  if (user.name === 'djiggy' && user.pass === 'passwd123') {
    next();
  } else {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
}

app.get("/auth", auth, function (req, res) {
  res.render("dj-dashboard")
});

app.listen(port, () =>{
    console.log(`Server is listening on ${port}`);
});
module.exports = { app }
 

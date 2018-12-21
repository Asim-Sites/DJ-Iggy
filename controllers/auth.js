const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const basicAuth = require('basic-auth');
const Event = require('../models/event');

var auth = function (req, res, next) {
    var user = basicAuth(req);
    if (!user || !user.name || !user.pass) {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      res.sendStatus(401);
      return;
    }
    if (user.name === 'djiggy' && user.pass === 'Test123') {
      next();
    } else {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      res.sendStatus(401);
      return;
    }
}

router.get("/auth", auth, function (req, res) {
    Event.find().then((events) => {
    res.render("dj-dashboard", {events})
    })
});

router.post("/auth/event", auth, function (req, res) {
    console.log("req.body:", req.body);
    const event = new Event(req.body);
    event.save();
    console.log("event:", event);
    res.redirect("/auth");
});

router.delete('/auth/:id', auth, function(req, res) {
    console.log("yo");
    Event.findOneAndDelete({_id: req.params.eventId}).then(() => {
        res.redirect('/auth');
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
// const nodemailer = require('nodemailer');
var mail = require("nodemailer").mail;
// create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
// });
// read into mongoose methods.
router.get('/', (req,res) => {
    // find() takes an object as a condition, and a callback. An empty object in {} means look for everything.
        // Finds documents
    // OLD WAY
    // Post.find({}, function(err, posts)  {
    //     if (err) throw err;
    //     // Returns the rendered HTML of a view via the callback function.
    //     // It accepts an optional parameter that is an object containing local variables for the view.
    //     res.render('index', {posts:posts});
    // });
    res.render("index");
    // Post.find({})
    //     .then(posts => {
    //         res.render("posts_show.hbs", { posts });
    //     })
    //     .catch(err => {
    //         console.log(err.message);
    //     });
});

router.get('/bio', (req,res) => {
    res.render("bio");
});

router.get('/photos', (req,res) => {
    res.render("photos");
});

router.get('/events', (req,res) => {
    res.render("events");
});

router.get('/contact', (req,res) => {
    res.render("contact");
});

router.post('/contact', (req,res) => {
    // setup email data with unicode symbols
    const name = req.body.name +" " + req.body.surname;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    mail({
        from: `"${name} 👻" <${email}>`, // sender address
        to: 'asimzaidih@gmail.com', // list of receivers
        subject: `DJ Iggy Contact Form ✔`, // Subject line
        text: message, // plain text body
        html: `
        <p>${message}</p>
        <p><u>Contact Number: ${phone}</u></p>
        ` // html body
    });
    // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     // Preview only available when sending through an Ethereal account
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // });
    res.redirect('/')

});

// SUBREDDIT
// router.get("/n/:subreddit", function(req, res) {
// Post.find({ subreddit: req.params.subreddit })
//     .then(posts => {
//     res.render("posts_show.hbs", { posts });
//     })
//     .catch(err => {
//     console.log(err);
//     });
// });

// router.get('/posts/new', (req,res) => {
//     res.render('posts_new');
// });

// router.post('/posts/new', (req,res) => {
//     const post = new Post(req.body);
//     post.save((err, post) => {
//         res.redirect(`/`);
//     })
// });



module.exports = router;
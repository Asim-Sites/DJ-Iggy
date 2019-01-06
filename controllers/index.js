const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const Event = require('../models/event');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     service: 'gmail', // true for 465, false for other ports
//     auth: {
//         user: process.env.USER_EMAIL, // generated ethereal user
//         pass: process.env.USER_PASSWORD // generated ethereal password
//     }
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
    Event.find().then((events) => {
        if (events.length > 4) {
            eventsTooLong = true;
        } else {
            eventsTooLong = false;
        }
        res.render("events", {events, eventsTooLong} );
    }).catch(err => {
        console.log(err);
    });
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

    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    const msg = {
    to: 'asimzaidih@gmail.com',
    from: `"${name} 👻" <${email}>`,
    subject: 'DJ Iggy Contact Form ✔',
    text: message,
    html: `<p>${message}</p>
        <p><u>Contact Number: ${phone}</u></p>`,
    };
    sgMail.send(msg);
    console.log("sent msg: ", msg);
    
    successMsg = "Thanks for contacting DJ Iggy. I'll get back to you soon!"
    res.render('contact', {successMsg})
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
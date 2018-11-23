const express = require('express');
const router = express.Router();

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
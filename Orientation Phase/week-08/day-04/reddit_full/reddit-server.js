'use strict';
exports.__esModule = true;
var render_functions_1 = require("./assets/javascript/render-functions");
require('dotenv').config();
var PORT = 3000;
var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var konzola = console.log;
var reddit = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_db
});
var errorHandling = function (response, error) {
    error ? (konzola(error),
        response.status(500).send()) :
        null;
};
app.use('/assets', express.static('assets'));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './assets/views'));
reddit.connect(function (error) {
    error ? konzola('The cookie jar is not reachable. :(') :
        konzola('The cookie jar is in your hands. Feast!');
});
app.get('/', function (req, res) {
    reddit.query("SELECT * FROM posts;", function (error, rows) {
        errorHandling(res, error);
        res.status(200).render('index', { listPosts: render_functions_1.generatePosts(rows) });
    });
});
app.get('/hello', function (req, res) {
    res.send('Hello Boss!');
});
app.post('/subscription', function (req, res) {
    res.set('Content-type', 'text/plain');
    var newUser = req.body;
    req.get('Content-type') === 'application/json' ?
        reddit.query("INSERT INTO users\n      (user_name, profile_pic)\n      VALUES ('" + newUser.user + "', '" + newUser.picture + "');", function (error, okPacket) {
            error ? res.send('User name is already taken. Please choose another one!') :
                res.status(200).send('Account successfully created! Welcome!');
        }) :
        res.send("Invalid request. You naughty being!");
});
app["delete"]('/subscription', function (req, res) {
    res.set('Content-type', 'text/plain');
    var deleteAcc = req.body.user;
    req.get('Content-type') === 'application/json' ?
        reddit.query("DELETE FROM users\n      WHERE user_name = '" + deleteAcc + "';", function (error, okPacket) {
            errorHandling(res, error);
            res.status(200).send('Account deleted successfully!');
        }) :
        res.send('Invalid request. You naughty being!');
});
app.get('/posts', function (req, res) {
    res.set('Content-type', 'application/json');
    req.get('Content-type') === 'application/json' ?
        reddit.query("SELECT * FROM posts;", function (error, rows) {
            errorHandling(res, error);
            res.status(200).json(rows);
        }) : res.send('Request is invalid. You loser!');
});
app.post('/posts', function (req, res) {
    res.set('Content-type', 'application/json');
    var newPost = req.body;
    var user = req.body.user;
    req.get('Content-type') === 'application/json' ?
        reddit.query("INSERT INTO posts\n      (post_title, post_content, user_name)\n      VALUES ('" + newPost.title + "', '" + newPost.content + "', '" + newPost.user + "');", function (error, okPacket) {
            errorHandling(res, error);
            reddit.query("SELECT * FROM posts \n      WHERE post_id = " + okPacket.insertId, function (error, rows) {
                errorHandling(res, error);
                reddit.query("UPDATE users SET user_posts = user_posts + 1\n          WHERE user_name = '" + user + "';", function (res, error) { });
                res.status(200).json(rows);
            });
        }) :
        res.send('Nope, wrong content. Try something else laddy!');
});
app.put('/posts/:id/downvote', function (req, res) {
    res.set('Content-type', 'application/json');
    var postId = req.params.id;
    req.get('Content-type') === 'application/json' ?
        reddit.query("UPDATE posts SET post_score = post_score - 1\n      WHERE post_id = " + postId + ";", function (error, output) {
            errorHandling(res, error);
            reddit.query("SELECT * FROM posts\n      WHERE post_id = " + postId + ";", function (error, rows) {
                errorHandling(res, error);
                res.status(200).json(rows);
            });
        }) :
        res.send('Invalid request. Show me something else!');
});
app.put('/posts/:id/upvote', function (req, res) {
    res.set('Content-type', 'application/json');
    var postId = req.params.id;
    req.get('Content-type') === 'application/json' ?
        reddit.query("UPDATE posts SET post_score = post_score + 1\n      WHERE post_id = " + postId + ";", function (error, okPacket) {
            errorHandling(res, error);
            reddit.query("SELECT * FROM posts \n      WHERE post_id = " + postId + ";", function (error, rows) {
                errorHandling(res, error);
                res.status(200).json(rows);
            });
        }) :
        res.send('Invalid request. Show me something else!');
});
app["delete"]('/posts/:id', function (req, res) {
    res.set('Content-type', 'application/json');
    var postId = req.params.id;
    var user = req.body.user;
    req.get('Content-type') === 'application/json' ?
        reddit.query("DELETE FROM posts\n      WHERE post_id = " + postId, function (error, okPacket) {
            errorHandling(res, error);
            reddit.query("UPDATE users SET user_posts = user_posts - 1\n          WHERE user_name = '" + user + "';", function (res, error) { });
            res.status(200).json({
                message: "You've successfully deleted your post (ID: " + postId + ")!"
            });
        }) :
        res.send('Invalid request. Show me something else!');
});
app.put('/posts/:id', function (req, res) {
    res.set('Content-type', 'application/json');
    var postId = req.params.id;
    var editedContent = req.body.content;
    var editedTitle = req.body.title;
    req.get('Content-type') === 'application/json' ?
        reddit.query("UPDATE posts SET post_content = '" + editedContent + "',\n      post_title = '" + editedTitle + "'\n      WHERE post_id = " + postId + ";", function (error, okPacket) {
            errorHandling(res, error);
            reddit.query("SELECT * FROM posts \n      WHERE post_id = " + postId + ";", function (error, rows) {
                errorHandling(res, error);
                res.status(200).json(rows);
            });
        }) :
        res.send('Invalid request. Show me something else!');
});
app.listen(PORT, function () {
    konzola('What is thy bidding, my master?');
});

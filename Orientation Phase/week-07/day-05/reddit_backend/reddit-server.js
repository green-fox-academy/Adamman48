'use strict';
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
reddit.connect(function (error) {
    error ? konzola('The cookie jar is not reachable. :(') :
        konzola('The cookie jar is in your hands. Feast!');
});
app.get('/hello', function (req, res) {
    res.send('Hello Boss!');
});
app.get('/posts', function (req, res) {
    res.set('Content-type', 'application/json');
    req.get('Content-type') === 'application/json' ?
        reddit.query("SELECT * FROM posts;", function (error, rows) {
            errorHandling(res, error);
            res.json(rows);
        }) : res.send('Request is invalid. You loser!');
});
app.post('/posts', function (req, res) {
    res.set('Content-type', 'application/json');
    var newPost = req.body;
    req.get('Content-type') === 'application/json' ?
        reddit.query("INSERT INTO posts\n      (post_title, post_content, user_name)\n      VALUES ('" + newPost.title + "', '" + newPost.url + "', '" + newPost.user + "');", function (error, rows) {
            errorHandling(res, error);
            konzola(rows);
        })
        /* reddit.query(`SELECT * FROM posts
          WHERE post_content = `)    */
        :
            null;
    /*  req.get('Content-type') === 'application/json' ?
       
     */
});
app.listen(PORT, function () {
    konzola('What is thy bidding, my master?');
});

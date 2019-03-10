'use strict';

import { KeyObject } from "crypto";

require('dotenv').config();
const PORT: number = 3000;
const express = require ('express');
const app = express();
const path = require ('path');
const mysql = require ('mysql');
const konzola = console.log;

const reddit = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_db
});

const errorHandling = (response, error) => {
  error ? (konzola(error),
      response.status(500).send()) :
        null;
};

app.use('/assets', express.static('assets'));
app.use(express.json());

reddit.connect((error) => {
  error ? konzola('The cookie jar is not reachable. :(') :
    konzola('The cookie jar is in your hands. Feast!');
});

app.get('/hello', (req, res) => {
  res.send('Hello Boss!');
});

app.get('/posts', (req, res) => {
  res.set('Content-type', 'application/json');
  req.get('Content-type') === 'application/json' ?
    reddit.query(`SELECT * FROM posts;`, (error, rows) => {
    errorHandling(res, error);
    res.send(rows);
  }) : res.send('Request is invalid. You loser!');
});

app.post('/posts', (req, res): void => {
  res.set('Content-type', 'application/json');
  let newPost = req.body;
  req.get('Content-type') === 'application/json' ?
    reddit.query(`INSERT INTO posts
      (post_title, post_content, user_name)
      VALUES ('${newPost.title}', '${newPost.url}', '${newPost.user}');`, 
        (error, okPacket) => {
          errorHandling(res, error);
          reddit.query(`SELECT * FROM posts WHERE post_id = ${okPacket.insertId}`, (error, rows) => {
            errorHandling(res, error);
            res.json(rows);
          })}) :
          res.send('Nope, wrong content. Try something else laddy!');
});

app.put('/posts/:id/downvote', (req, res) => {
  res.set('Content-type', 'application/json');
  let postId = req.params.id;
  req.get('Content-type') === 'application/json' ? 
    reddit.query(`UPDATE posts SET post_score = post_score - 1
      WHERE post_id = ${postId};`, (error, output) => {
        errorHandling(res, error);
    reddit.query(`SELECT * FROM posts
      WHERE post_id = ${postId};`, (error, rows) => {
        errorHandling(res, error);
        res.json(rows);
    });
  }) :
    res.send('Invalid request. Show me something else!')
});

app.put('/posts/:id/upvote', (req, res) => {
  res.set('Content-type', 'application/json');
  let postId = req.params.id;
  req.get('Content-type') === 'application/json' ?
    reddit.query(`UPDATE posts SET post_score = post_score + 1
      WHERE post_id = ${postId};`, (error, okPacket) => {
        errorHandling(res, error);
    reddit.query(`SELECT * FROM posts 
      WHERE post_id = ${postId};`, (error, rows) => {
      errorHandling(res, error);
      res.json(rows);
    });
  }) :
  res.send('Invalid request. Show me something else!');
});

app.delete('/posts/:id', (req, res) => {
  res.set('Content-type', 'application/json');
  let postId = req.params.id;
  req.get('Content-type') === 'application/json' ?
    reddit.query(`DELETE FROM posts
      WHERE post_id = ${postId}`, (error, okPacket) => {
        errorHandling(res, error);
        res.json({
          message: `You've successfully deleted your post (ID: ${postId})!`,
      });
    }) :
  res.send('Invalid request. Show me something else!');
});



app.listen(PORT, () => {
  konzola('What is thy bidding, my master?');
});
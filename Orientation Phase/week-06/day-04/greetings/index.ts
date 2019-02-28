'use strict';

const PORT = 3000;
const express = require('express');
const app = express();
const path = require('path');

app.listen(PORT, () => {
  console.log(`It's alive.....of course!`);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let data: Object = req.query;
  Object.keys(data).length === 0 ?
  data = {name: 'Guest'} :
  null;
  res.render('home', data);
});
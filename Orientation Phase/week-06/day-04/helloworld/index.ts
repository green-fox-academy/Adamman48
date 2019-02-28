'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`It's alive!`);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Szervusz Világ!',
    date: 'körülbelül Kr. e. 4500 megaév',
    eon: 'Hadaikum eonotéma',
    temp: 'Magas hőmérséklet'
  });
});
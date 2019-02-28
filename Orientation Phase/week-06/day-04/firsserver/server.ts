'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.listen(PORT, () => {
  console.log(`It's alive!`);
})

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
});
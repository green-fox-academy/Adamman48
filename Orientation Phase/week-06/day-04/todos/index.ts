'use strict';

const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

app.listen(PORT, () => {
  console.log(`The Lord said, let there be light....And there was light.`);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  
})
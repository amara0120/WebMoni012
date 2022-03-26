const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const port = process.env.port || 8080;

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('Home');
});

// 404 Not found
app.get('*', (req, res) => {
  res.redirect(404);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log('A szerver eelindult LOOOOL ');
});

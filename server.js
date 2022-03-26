const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

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
});

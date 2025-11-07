const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from CI' });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

module.exports = app;

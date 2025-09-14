"use strict";

var express = require('express');
var path = require('path');
var app = express();
app.use(express.json());
var port = 3000;

// Serve static files from the frontend/public folder
app.use(express["static"](path.join(__dirname, '../public')));
app.get('/api', function (req, res) {
  res.json({
    message: 'Hello from the backend!'
  });
});
app.post('/auth/signin', function (req, res) {
  res.json({
    message: 'sign-in successful',
    user: {
      email: req.body.email
    }
  });
});
app.post('/auth/signup', function (req, res) {
  res.json({
    message: 'sign-up successful',
    user: {
      email: req.body.email
    }
  });
});
app.get('/{*any}', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});
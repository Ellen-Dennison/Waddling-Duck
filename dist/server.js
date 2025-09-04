"use strict";

var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

// Serve static files from the frontend/public folder
app.use(express["static"](path.join(__dirname, '../public')));

// Example API endpoint
app.get('/api', function (req, res) {
  res.json({
    message: 'Hello from the backend!'
  });
});

// Example POST endpoint
app.post('/auth/signin', function (req, res) {
  res.json({
    email: 'helloworld.com'
  });
});

// Catch-all route for React Router (must come LAST)
app.get('/{*any}', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});
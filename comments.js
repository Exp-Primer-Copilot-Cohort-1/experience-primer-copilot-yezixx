// Create web server
// Define dependencies
var express = require('express');
var app = express();
var fs = require('fs');

// Define comments.json path
var COMMENTS_FILE = __dirname + '/comments.json';

// Define static folder
app.use(express.static(__dirname + '/public'));

// Define GET method to get comments
app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

// Define POST method to post comments
app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),
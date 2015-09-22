var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://alexhutchison:mvp@localhost/stackovercho";


router.get('/', function (req, res, next) {
  //get some data from the db
});

router.post('/', function (req, res, next) {
  var answer = req.body.answer;
  var userId = req.session.user.id;
  var questionId = req.params;
  console.log(questionId);
  var votes = 0;
});
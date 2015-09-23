var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://alexhutchison:mvp@localhost/stackovercho";

router.post('/', function (req, res, next) {
  var answer = req.body.answer;
  var userId = req.session.user.id;
  var questionId = req.body.questionId;
  var votes = 0;
  console.log(questionId, answer, userId);

  pg.connection(conString, function (err, client, done) {
    if (err) { console.log(err); }
    client.query('INSERT INTO answers (answer, votes, user_id, question_id) VALUES (\'' + answer + '\', \'' + votes + '\', \'' + userId + '\', \'' + questionId + '\');', function (err, res) {
      done();
      if (err) { console.log(err); }
      res.sendStatus(201);
    });
  });
});

router.get('/', function (req, res, next) {
  var results = [];
  var questionId = 13;
  console.log(questionId);
  pg.connection(conString, function (err, client, done) {
    var query = client.query('SELECT * FROM answers WHERE question_id=\'' + questionId + '\';');
    query.on('row', function (row) {
      results.push(row);
    });
    query.on('end', function () {
      client.end();
      res.json(results);
    });
  });

});


module.exports = router;
var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://alexhutchison:mvp@localhost/stackovercho";

/* GET home page. */
router.get('/', function(req, res, next) {
    var results = [];
  pg.connect(conString, function(err, client, done) {
    var query = client.query("SELECT questions.id, questions.title, questions.votes, users.username, users.name FROM questions, users WHERE users.id = questions.user_id;");
    query.on('row', function(row) {
      results.push(row);
    });
    query.on('end', function () {
      console.log(results);
      res.json(results);
    });
  });
});

router.post('/', function (req, res) {
  var title = req.body.title;
  var body = req.body.body;
  var userId = req.session.user.id;
  var votes = 0;
  console.log(title, body, userId);


  pg.connect(conString, function(err, client, done) {
    if (err) console.log('fuuuuuuuck');
    console.log(userId);
    client.query("INSERT INTO questions (title, body, votes, user_id) VALUES ('" + title + "', '" + body + "', '" + votes + "', '" + userId + "');", function (err, result) {
      if (err) {
        console.log(err);
      }

      res.sendStatus(201);
    });
  });
});

router.get('/:question', function (req, res, next) {
  var question = req.params.question;
  var results = [];
  pg.connect(conString, function (err, client, done) {
    var query = client.query('SELECT users.username, questions.title, questions.id, questions.body, questions.votes FROM users, questions WHERE users.id = questions.user_id AND questions.id=\'' + question + '\';' );
    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function () {
      console.log(results);
      res.json(results);
    });
  });
});

module.exports = router;
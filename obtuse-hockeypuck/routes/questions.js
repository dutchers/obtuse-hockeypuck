var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://alexhutchison:mvp@localhost/stackovercho";

/* GET home page. */
router.get('/', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    var results = [];
    var query = client.queery("SELECT * FROM questions");
    query.on('row', function(row) {
      results.push(row);
    });
    query.on('end', function () {
      res.json(results);
    });
  });
});

router.post('/', function (req, res) {
  var title = req.body.title;
  var body = req.body.body;
  var votes = 0;
  console.log(title, body);
  pg.connect(conString, function(err, client, done) {
    client.query("INSERT INTO questions (title, body, votes) VALUES ('" + title + "', '" + body + "', '" + votes + "');", function (err, result) {
      if (err) {
        console.log(err);
      }

      res.send(201);
    });
  });
});

module.exports = router;
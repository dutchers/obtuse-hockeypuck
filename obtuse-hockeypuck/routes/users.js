var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://alexhutchison:mvp@localhost/stackovercho";
/* GET users listing. */
router.get('/', function (req, res, next) {
  var results = [];
  pg.connect(conString, function (err, client, done) {
    var query = client.query("SELECT * FROM users");

    query.on('row', function (row) {
      results.push(row);
    });

    query.on('end', function () {
      client.end();
      return res.json(results);
    });

    if (err) {
      console.log(err);
    }

  });

});

router.get('/:username', function (req, res, next) {
  var username = req.params.username;
  var results = [];
  pg.connect(conString, function(err, client, done) {
    var query = client.query("SELECT * FROM users, questions WHERE users.id = questions.user_id AND username='" + username + "';");
    query.on('row', function (row) {
      results.push(row);
    });
    query.on('end', function () {
      client.end();
      console.log(results);
      res.json(results);
    });
  });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://alexhutchison:mvp@localhost/stackovercho";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello');
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var pass = req.body.password;
  var results = [];
  console.log(pass);
  pg.connect(conString, function (err, client, done) {
    var query = client.query('SELECT * FROM users WHERE password=\'' + pass + '\';');
    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function () {
      client.end();
      if (results) {
        if (results[0].password === pass) {
          console.log('You did it');
          req.session.regenerate(function(err) {
            req.session.user = results[0];
            res.send('success');
          });
        }
      }
    });
  });
});

module.exports = router;
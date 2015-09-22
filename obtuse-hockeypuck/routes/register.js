var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
// var util = require('../utils/utils');
var pg = require('pg');
var conString = "postgres://alexhutchison:mvp@localhost/stackovercho";

/* GET home page. */
router.get('/', function (req, res, next) {
  // var results = [];
  // pg.connect(conString, function (err, client, done) {
  //     console.log("This is totally getting called");

  //     var query = client.query("SELECT * FROM users");

  //     query.on('row', function (row) {
  //       results.push(row);
  //     });

  //     query.on('end', function () {
  //       client.end();
  //       return res.json(results);
  //     });

  //     if (err) {
  //       console.log(err);
  //     }
  //   });

});

router.post('/', function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  console.log(name, email, username, password);

    pg.connect(conString, function (err, client, done) {

      client.query("INSERT INTO users (name, email, username, password) VALUES ('" + name + "', '" + email + "', '" + username + "', '" + password + "')", function (err) {
        // done();
        if (err) {
          console.log(err);
          res.send('no');
        } else {
          res.send('yes');
        }
      });

    });




});

module.exports = router;
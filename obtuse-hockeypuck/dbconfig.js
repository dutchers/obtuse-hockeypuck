var pg = require('pg');
var conString = "postgres://alexhutchison:mvp@localhost/stackovercho";

var client = new pg.Client(conString);

module.exports.pg = pg;



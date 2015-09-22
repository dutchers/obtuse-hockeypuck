var bcrypt = require('node-bcrypt');


module.exports.createHash = function (password, cb) {
  bcrypt.hash(password, null, null, function(err, hash, cb) {
      if (err) {
        console.error(err);
      }
      cb(hash);
  });

};
// generate a hash from file stream
var crypto = require('crypto'),
  fs = require('fs'),
  key = 'mysecret key'

// open file stream
var fstream = fs.createReadStream('./test/hmac.js');
var hash = crypto.createHash('sha512', key);
hash.setEncoding('hex');

// once the stream is done, we read the values
fstream.on('end', function () {
  hash.end();
  // print result
  console.log(hash.read());
});

// pipe file to hash generator
fstream.pipe(hash);
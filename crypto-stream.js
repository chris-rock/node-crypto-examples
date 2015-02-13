// Nodejs encryption of buffers
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

var fs = require('fs');
var zlib = require('zlib');

// input file
var r = fs.createReadStream('file.txt');
// zip content
var zip = zlib.createGzip();
// encrypt content
var encrypt = crypto.createCipher(algorithm, password);
// decrypt content
var decrypt = crypto.createDecipher(algorithm, password)
// unzip content
var unzip = zlib.createGunzip();
// write file
var w = fs.createWriteStream('file.out.txt');

// start pipe
r.pipe(zip).pipe(encrypt).pipe(decrypt).pipe(unzip).pipe(w);

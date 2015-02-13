var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
 
function encrypt(buffer){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
  return crypted;
}
 
function decrypt(buffer){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
  return dec;
}
 
var hw = encrypt(new Buffer("hello world", "utf8"))
// outputs hello world
console.log(decrypt(hw).toString('utf8'));

// generate a hash from string
var crypto = require('crypto'),
  text = 'hello bob',
  key = 'mysecret key'

// create hahs
var hash = crypto.createHmac('sha512', key)
hash.update(text)
var value = hash.digest('hex')

// print result
console.log(value);

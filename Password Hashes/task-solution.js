const Crypto = require('crypto');

const passHash = (str) => Crypto.createHash('md5').update(str).digest('hex');

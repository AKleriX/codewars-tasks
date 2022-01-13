function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    return str.split('').map(symbol => abc1.indexOf(symbol) === -1 ? symbol : abc2[abc1.indexOf(symbol)]).join('');
  }
  this.decode = function (str) {
    return str.split('').map(symbol => abc2.indexOf(symbol) === -1 ? symbol : abc1[abc2.indexOf(symbol)]).join('');
  }
}
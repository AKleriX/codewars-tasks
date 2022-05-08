function KeywordCipher(abc, keyword) {
  this.currentKey =
    [...new Set(keyword)].join('') + [...abc].filter((l) => !keyword.includes(l)).join('');
  this.regExp = new RegExp('[' + abc + ']', 'g');

  this.encode = function (str) {
    return str.replace(this.regExp, (s) => this.currentKey[abc.indexOf(s)]);
  };
  this.decode = function (str) {
    return str.replace(this.regExp, (s) => abc[this.currentKey.indexOf(s)]);
  };
}

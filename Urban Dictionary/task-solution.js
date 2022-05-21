const WordDictionary = function () {
  this.dictionary = new Set();
};

WordDictionary.prototype.addWord = function (word) {
  this.dictionary.add(word);
};

WordDictionary.prototype.search = function (word) {
  let regExp = new RegExp('^' + word + '$');
  for (let val of this.dictionary.values()) if (regExp.test(val)) return true;
  return false;
};

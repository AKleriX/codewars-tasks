function Robot() {
  this.words = new Set(
    'I do not understand the input I already know the word Thank you for teaching me'
      .toUpperCase()
      .split(' '),
  );
}

Robot.prototype.learnWord = function (word) {
  let upCaseWord = word.toUpperCase();
  if (/[^A-Z]/g.test(upCaseWord) || !word.length) return 'I do not understand the input';
  if (this.words.has(upCaseWord)) return `I already know the word ${word}`;
  this.words.add(upCaseWord);
  return `Thank you for teaching me ${word}`;
};

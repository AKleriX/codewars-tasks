String.prototype.trim = function (c = ' ') {
  return this.replace(new RegExp('^' + c + '+', 'i'), '').replace(
    new RegExp(c + '+' + '$', 'i'),
    '',
  );
};

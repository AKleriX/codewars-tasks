String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map((s) => (s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase()))
    .join('');
};

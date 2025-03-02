String.prototype.findParenMatch = function (pos) {
  let c = 1,
    d = this[pos] === '(' ? 1 : -1;
  for (let i = pos + d; i >= 0 && i < this.length; i += d) {
    if (this[i] === '(') c += d;
    if (this[i] === ')') c -= d;
    if (!c) return i;
  }
  return -1;
};

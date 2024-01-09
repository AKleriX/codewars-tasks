String.prototype.contains = function (s, c = false) {
  return new RegExp(
    s.replace(/[?+*(){}$^|]/g, (p) => '//' + p),
    c ? '' : 'i',
  ).test(this);
};

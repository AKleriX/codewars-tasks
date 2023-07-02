Array.range = function (start, count) {
  return Array.from({ length: count }, (_, i) => i + start);
};

Array.prototype.sum = function () {
  return this.reduce((s, n) => s + n, 0);
};

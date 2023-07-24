Array.prototype.sum = function () {
  return this.reduce((s, n) => s + n, 0);
};

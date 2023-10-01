Array.prototype.size = function () {
  return this.reduce((l, e) => l + 1, 0);
};

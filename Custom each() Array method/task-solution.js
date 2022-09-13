Array.prototype.each = function (f) {
  for (let i = 0; i < this.length; i++) if (f(this[i], i, this) === true) break;
};

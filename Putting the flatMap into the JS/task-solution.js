Array.prototype.flatMap = function (f) {
  return this.reduce((a, v) => a.concat(f(v)), []);
};

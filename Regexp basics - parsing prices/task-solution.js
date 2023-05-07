String.prototype.toCents = function () {
  return /^\$\d+\.\d\d$/.test(this)
    ? +this.slice(1, this.indexOf('.')) * 100 + +this.slice(-2)
    : null;
};

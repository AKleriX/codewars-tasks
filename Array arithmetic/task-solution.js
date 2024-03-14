Array.prototype.valueOf = function () {
  return this.length ? this.reduce((s, v) => s + v, typeof this[0] === 'string' ? '' : 0) : 0;
};

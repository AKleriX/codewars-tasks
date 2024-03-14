Array.prototype.isSparse = function () {
  return this.length !== this.filter((_) => true).length;
};

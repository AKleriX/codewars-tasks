Array.prototype.remove = function (index) {
  if (typeof index === 'number' && index >= 0 && index < this.length) this.splice(index, 1);
  return this;
};

Array.prototype.only = function (keys) {
  return this.filter((_, i) => keys.includes(i));
};

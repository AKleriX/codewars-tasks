Array.prototype.except = function (keys) {
  let indexes = Array.isArray(keys) ? [...keys] : [keys];
  return this.filter((n, i) => !indexes.includes(i));
};

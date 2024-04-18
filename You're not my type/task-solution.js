Array.prototype.ofType = function (type) {
  return this.filter((el) => {
    if (type === String) return typeof el === 'string';
    else if (type === Number) return typeof el === 'number';
    else if (type === Boolean) return typeof el === 'boolean';
    return el instanceof type;
  });
};

Array.prototype.toDictionary = function (keyFn, valueFn = (v) => v) {
  return this.reduce((d, v) => ((d[keyFn(v)] = valueFn(v)), d), {});
};

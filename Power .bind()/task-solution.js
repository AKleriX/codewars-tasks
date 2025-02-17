Function.prototype.bind = function (ctx, ...boundArgs) {
  const fn = this._boundFn || this;
  const boundFn = (...args) => fn.apply(ctx, [...boundArgs, ...args]);
  boundFn._boundFn = fn;
  return boundFn;
};

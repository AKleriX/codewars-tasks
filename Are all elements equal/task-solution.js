Object.defineProperty(Object.prototype, 'eqAll', {
  enumerable: false,
  value: function () {
    let elems = new Set(Array.from(this));
    return elems.size < 2 && !elems.has(NaN);
  },
});

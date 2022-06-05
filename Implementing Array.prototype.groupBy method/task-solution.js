Array.prototype.groupBy = function (
  fn = function (val) {
    return val;
  },
) {
  return this.reduce((g, el) => {
    let res = fn(el);
    g[res] = !g[res] ? [el] : g[res].concat([el]);
    return g;
  }, {});
};

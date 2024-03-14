function makeClass(...properties) {
  return function (...vals) {
    properties.forEach((p, i) => (this[p] = vals[i]));
  };
}

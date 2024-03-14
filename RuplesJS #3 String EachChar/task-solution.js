String.prototype.eachChar = function (a) {
  return typeof a === 'function' ? [...this].map(a).join('') : [...this].map((s) => s + a).join('');
};

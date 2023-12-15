String.prototype.formatWith = function (...args) {
  return this.replace(/\{(\d)\}/g, (m, i) => (args[i] ? args[i] : m));
};

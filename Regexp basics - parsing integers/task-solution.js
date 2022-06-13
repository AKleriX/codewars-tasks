String.prototype.toInteger = function () {
  let match = this.match(/^([-+])?(0b[01]+|0x[0-9A-Fa-f]+|0o[0-7]+|\d+)$/);
  return match ? `${match[1] || 0}1` * match[2] : null;
};

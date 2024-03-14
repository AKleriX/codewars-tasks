// Recover toString() here :)
Number.prototype.toString = function () {
  return this + '';
};

Boolean.prototype.toString = function () {
  return this == true ? 'true' : 'false';
};

Array.prototype.toString = function () {
  return this.reduce((s, v, i) => s + (!i ? v.toString() : ', ' + v.toString()), '[') + ']';
};

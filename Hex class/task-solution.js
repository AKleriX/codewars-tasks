function Hex(value) {
  this.hexVal = '0x' + value.toString(16).toUpperCase();
  this.decVal = value;

  this.valueOf = function () {
    return this.decVal;
  };

  this.toString = function () {
    return this.hexVal;
  };

  this.toJSON = function () {
    return this.toString();
  };

  this.plus = function (x) {
    return new Hex(value + x);
  };

  this.minus = function (x) {
    return new Hex(value - x);
  };
}

Hex.parse = function (string) {
  return parseInt(string, 16);
};

String.prototype.hexNumber = function () {
  return /^(0x)?[0-9A-Fa-f]+$/.test(this);
};

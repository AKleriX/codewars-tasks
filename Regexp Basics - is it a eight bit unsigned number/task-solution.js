String.prototype.eightBitNumber = function () {
  return /^(1[0-9][0-9]|2[0-4][0-9]|25[0-5]|[1-9][0-9]|[0-9])$/.test(this);
};

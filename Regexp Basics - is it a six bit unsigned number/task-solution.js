String.prototype.sixBitNumber = function () {
  return /^[1-5]?\d$/.test(this) || /^6[0-3]$/.test(this);
};

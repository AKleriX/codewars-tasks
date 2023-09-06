String.prototype.signedEightBitNumber = function () {
  return /(^-128$)|(^-?[1-9][0-9]$)|(^-?1[0-1][0-9]$)|(^-?12[0-7]$)|(^-[1-9]$)|(^\d$)/.test(this);
};

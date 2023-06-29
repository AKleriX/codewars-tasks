String.prototype.sixBitNumber = function (): boolean {
  return /^([1-5]?\d|6[0-3])$/.test(this.toString());
};

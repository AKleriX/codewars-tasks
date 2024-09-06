Array.prototype.transpose = function () {
  if (this.length === 0) return [];
  if (this[0].length === 0) return [[]];

  return this[0].map((_, colIndex) => this.map((row) => row[colIndex]));
};

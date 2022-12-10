Array.prototype.numberOfOccurrences = function (el) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) if (this[i] === el) counter++;
  return counter;
};

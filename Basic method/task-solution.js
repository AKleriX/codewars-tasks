Array.prototype.max = function () {
  let max = -Infinity;
  for (let i = 0; i < this.length; i++)
    if (isNaN(+this[i])) return NaN;
    else if (max < +this[i]) max = +this[i];
  return max;
};

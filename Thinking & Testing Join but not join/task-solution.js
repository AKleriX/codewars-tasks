Array.prototype.Join = function (separator) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(this[i]);
    if (i < this.length - 1)
      if (Array.isArray(separator)) result.push(...separator);
      else result.push(separator);
  }
  return result;
};

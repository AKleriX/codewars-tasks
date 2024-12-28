Array.prototype.filter = function (callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

  const result = [],
    originalLength = this.length;
  for (let i = 0; i < originalLength; i++)
    if (i in this) {
      const value = this[i];
      if (callback.call(thisArg, value, i, this)) result.push(value);
    }
  return result;
};

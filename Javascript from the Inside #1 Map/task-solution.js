Array.prototype.map = function (callback, thisArg) {
  let result = new Array(this.length);
  for (let i = 0; i < this.length; i++)
    if (i in this) result[i] = callback.call(thisArg, this[i], i, this);
  return result;
};

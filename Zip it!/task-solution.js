Array.prototype.zip = function (arr, fn) {
  const len = arr.length > this.length ? this.length : arr.length;
  let res = [];
  for (let i = 0; i < len; i++) res.push(fn(this[i], arr[i]));
  return res;
};

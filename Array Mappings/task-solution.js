Array.prototype.map = function (fn) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) newArr.push(fn(this[i], i, [...this]));
  return newArr;
};

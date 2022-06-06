Array.prototype.reduce = function (process, initial) {
  let acc = initial === undefined ? this[0] : initial,
    tmpArr = [...this];
  for (let i = initial === undefined ? 1 : 0; i < this.length; i++)
    acc = process(acc, this[i], i, tmpArr);
  return acc;
};

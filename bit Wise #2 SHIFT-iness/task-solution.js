Number.prototype.twos = function (n) {
  let result = '';
  while (n > 0) result += (this >> --n) & 1;
  return result;
};

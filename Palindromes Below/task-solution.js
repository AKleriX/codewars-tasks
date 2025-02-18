Number.prototype.palindromeBelow = function (base) {
  let res = [];
  for (let i = 1; i < this; i++) {
    let str = i.toString(base);
    if (str === str.split('').reverse().join('')) res.push(i);
  }
  return res;
};

const BigNumber = require('bignumber.js');

function productSansN(n) {
  let zeroIndex = -1,
    prod = n.reduce((p, num, i) => {
      if (num === 0) {
        if (zeroIndex === -1) {
          zeroIndex = i;
          return p;
        } else return null;
      }
      if (p) return p.multipliedBy(num);
      return null;
    }, new BigNumber(1));
  return prod === null
    ? new Array(n.length).fill('0')
    : zeroIndex > -1
    ? Array.from({ length: n.length }, (_, i) => (i === zeroIndex ? prod.toFixed(0) : '0'))
    : n.map((num) => prod.dividedBy(num).toFixed(0));
}

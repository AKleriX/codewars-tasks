const BigNumber = require('bignumber.js');

function isOre(n) {
  let dec = [],
    sum;
  for (let i = n; i > 0; i--) if (!(n % i)) dec.push(i);
  sum = dec
    .map((n) => new BigNumber(n))
    .reduce((s, d) => s.plus(new BigNumber(1).dividedBy(d)), new BigNumber(0))
    .toNumber();
  return !((dec.length / sum) % 1);
}

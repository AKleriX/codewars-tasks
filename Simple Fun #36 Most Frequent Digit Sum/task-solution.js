function mostFrequentDigitSum(n) {
  let seq = [],
    counter = {},
    max = -Infinity,
    maxNum = -Infinity;
  while (n > 0) {
    seq.push(s(n));
    n = step(n);
  }
  seq.push(0);
  counter = seq.reduce((c, n) => {
    c[n] = (c[n] || 0) + 1;
    return c;
  }, {});
  for (let num in counter) {
    if (counter[num] > max) {
      max = counter[num];
      maxNum = num;
    } else if (counter[num] === max && maxNum < num) maxNum = num;
  }
  return +maxNum;
}

const s = (n) => [...n.toString()].reduce((sum, d) => sum + +d, 0);
const step = (n) => n - s(n);

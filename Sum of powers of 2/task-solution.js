// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
const powers = (n) => {
  let res = [],
    pow = 0;

  while (2 ** ++pow < n);
  for (let i = pow; i >= 0; i--) {
    let currentPow = 2 ** i,
      currentSum = res.reduce((s, n) => s + n, 0);
    if (currentPow + currentSum <= n) res.push(currentPow);
  }

  return res.sort((a, b) => a - b);
};

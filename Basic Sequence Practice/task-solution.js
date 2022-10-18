function sumOfN(n) {
  let seq = [],
    currentSum = 0;
  for (let i = 0; n < 0 ? i >= n : i <= n; i += n < 0 ? -1 : 1) {
    currentSum += i;
    seq.push(currentSum);
  }
  return seq;
}

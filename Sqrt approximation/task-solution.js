function sqrtApproximation(n) {
  let k = 0;
  for (let i = 1; i <= n; i++)
    if (i * i >= n) {
      k = i;
      break;
    }
  return k * k === n ? k : [k - 1, k];
}

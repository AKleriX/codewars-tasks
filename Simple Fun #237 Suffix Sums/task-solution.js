const suffixSums = (a) => {
  const n = a.length,
    b = new Array(n);

  let totalSum = a.reduce((sum, current) => sum + current, 0);
  for (let i = 0; i < n; i++) {
    b[i] = totalSum;
    totalSum -= a[i];
  }

  return b;
};
